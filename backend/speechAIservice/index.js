"use strict";

// Export credentials
process.env.GOOGLE_CLOUD_PROJECT = "metal-celerity-338906";
process.env.GOOGLE_APPLICATION_CREDENTIALS = "speech-AI-serviceaccount.json";

// Modules
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const speech = require("@google-cloud/speech");
const processFile = require("./middleware/upload");
const { Storage } = require("@google-cloud/storage");
const { response } = require("express");
const { format } = require("util");

// Client and app
const app = express();
const port = process.env.PORT || 3003;
const client = new speech.SpeechClient();
const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT,
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});
const bucket = storage.bucket("audio_files_pivot_pioneers_hackathon2022");

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

// Methods
async function transcribe(uri) {
  /**
   * Begins transcription of an audio file which is passed as a uri.
   * @param {string} uri The link pointing to the audio file to be transcribed (stored in a GCS bucket)
   * @returns {string} The name of the operation which will be used to poll for transcription status
   */
  const gcsUri = uri;

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    uri: gcsUri,
  };
  const config = {
    encoding: "WEBM_OPUS",
    sampleRateHertz: 48000,
    languageCode: "en-US",
  };
  const request = {
    audio: audio,
    config: config,
  };

  // Detects speech in the audio file. This creates a recognition job that you
  // can wait for now, or get its result later.
  // NOTE: https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#long-running-operations
  const [operation] = await client.longRunningRecognize(request);
  console.log(getStatus(operation.name));
  return operation.name;
}

async function getStatus(name) {
  /**
   * Returns an object of the operation from the given name which contains the name of the operation and whether or not it is done transcribing.
   * @param {string} name A string which represents the name of the operation, given by the transcribe() function
   * @returns {object}
   *    @property {string} operationsName A string which represents the name of the operation (same as input)
   *    @property {bool} isDone A bool which is false if the transcription has not finished yet or is true if it has finished
   */
  const response = await client.checkLongRunningRecognizeProgress(name);
  return {
    operationsName: name,
    isDone: response.latestResponse.done,
  };
}

async function getData(name) {
  /**
   * Returns the transcript of the operation from the given name in an object.
   * @param {string} name A string which represents the name of the operation, given by the transcribe() function
   * @returns {object}
   *    @property {object} data Contains the below values
   *        @property {string} transcript A string representing the words recognized by google-speech-to-text API
   */
  const operation = await client.checkLongRunningRecognizeProgress(name);

  let response = operation.latestResponse.response.value;
  let result = operation.longrunningDescriptor.responseDecoder(response);
  let transcript = result.results[0].alternatives[0].transcript;
  return {
    data: {
      transcript: transcript,
    },
  };
}

async function upload(req, res) {
  try {
    await processFile(req, res);

    if (!req.file) {
      return res.status(400).json({
        statusCode: 400,
        message: "Please upload a file!",
      });
    }

    // Create a new blob in the bucket and upload the file data.
    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on("error", (err) => {
      res.status(500).json({
        statusCode: 500,
        message: err.message,
      });
    });

    blobStream.on("finish", async (data) => {
      // Create URL for directly file access via HTTP.
      const publicUrl = format(`gs://${bucket.name}/${blob.name}`);

      try {
        // Make the file public
        await bucket.file(req.file.originalname).makePublic();
      } catch {
        return res.status(500).json({
          statusCode: 500,
          message: `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
          url: publicUrl,
        });
      }

      res.status(200).json({
        statusCode: 200,
        message: "Uploaded the file successfully: " + req.file.originalname,
        url: publicUrl,
      });
    });

    blobStream.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
}

// APP ROUTES
app.get("/status", (req, res) => {
  console.log("service is running");
});
// GET to get status
app.get("/status/:operationsName", async (req, res) => {
  const name = req.params.operationsName;
  const status = await getStatus(name);
  if (status.isDone) {
    res.status(200).json({
      statusCode: 200,
      message: "The transcription has finished being made",
    });
  } else {
    res.status(200).json({
      statusCode: 200,
      message: "The transcription is still in progress",
    });
  }
});

// GET to get transcription
app.get("/transcript/:operationsName", async (req, res) => {
  const name = req.params.operationsName;
  const transcript = await getData(name);

  res.status(200).json({
    statusCode: 200,
    data: transcript.data,
  });
});

// POST to upload
app.post("/upload", async (req, res) => {
  await upload(req, res);
});

// POST to start async transcription
app.post("/startJob", async (req, res) => {
  // Get link to audio file
  let uri = req.body.data.uri;
  const operationsName = await transcribe(uri);

  res.status(200).json({
    statusCode: 200,
    message: "Transcription job started",
    data: {
      operationsName: operationsName,
    },
  });
});

// POST to map transcription to trigger words
app.post("/createMap", (req, res) => {
  // Set variables
  let keyPhrases = req.body.data.keyPhrases;
  let transcription = req.body.data.transcription;

  // Sort and remap
  transcription = transcription.split(" ");

  let phraseMap = {};
  for (const key of keyPhrases) {
    phraseMap[key] = 0;
  }

  for (let i = 0; i < keyPhrases.length; i++) {
    // Split up the phrase
    let splitPhrase = keyPhrases[i].split(" ");
    let counter = 0;
    let index = 0;
    let phraseFound = true;
    while (counter < splitPhrase.length) {
      if (
        splitPhrase[counter].toLowerCase() ===
        transcription[index].toLowerCase()
      ) {
        counter++;
        index++;
        continue;
      }
      index++;
      if (counter > 0) {
        counter = 0;
      }
      if (index === transcription.length) {
        phraseFound = false;
        break;
      }
    }
    if (phraseFound) {
      phraseMap[keyPhrases[i]] = index - counter;
    } else {
      delete phraseMap[keyPhrases[i]];
    }
  }

  let sortedIndexes = [];

  for (const key in phraseMap) {
    let index = parseInt(phraseMap[key]);
    sortedIndexes.push(index);

    sortedIndexes.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }

  let result = {};

  for (const key in phraseMap) {
    // Set indexes for the string
    let startIndex = phraseMap[key];
    let endIndex = 0;
    if (sortedIndexes.indexOf(startIndex) === sortedIndexes.length - 1) {
      endIndex = transcription.length;
    } else {
      endIndex = sortedIndexes[sortedIndexes.indexOf(startIndex) + 1];
    }
    // Create array of words
    let section = transcription.slice(startIndex, endIndex);
    section = section.join(" ");

    result[key] = section;
  }

  console.log(result);

  res.status(200).json({
    statusCode: 200,
    data: result,
  });
});

// Start service
app.listen(port, () => {
  console.log(`SpeechAI microservice listening on port ${port}...`);
});
