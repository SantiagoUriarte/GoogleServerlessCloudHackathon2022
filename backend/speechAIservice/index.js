"use strict";

// Export credentials
process.env.GOOGLE_CLOUD_PROJECT="metal-celerity-338906";
process.env.GOOGLE_APPLICATION_CREDENTIALS="speech-AI-serviceaccount.json";

// Modules
const express = require('express');
const helmet = require('helmet');
const speech = require('@google-cloud/speech');

// Client and app
const app = express();
const client = new speech.SpeechClient();

// POST
app.post("/", function (req, res) {

  // Validate request
  if req.body.postURI !== "string" {
    throw new Error("Invalid address");
  }

  // Array of key phrases

  let keyPhrases = req.post.keyPhrases

  async function main() {
    // The path to the remote audio file 
    const postURI = req.body;
  
    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
      uri: postURI,
    };
    const config = {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    };
    const request = {
      audio: audio,
      config: config,
    };
  
    // Detects speech in the audio file
    const [response] = await client.recognize(request);
      // This takes the first "alternative" and joins the result into a single string for the transcription
    const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
      //console.log(`Transcription: ${transcription}`);

    // TODO: Split the transcription into parts based on key phrases

    // TODO: Send back response as JSON with key phrases as keys and transcription parts as values

    });
  };

})