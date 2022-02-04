"use strict";

const { response } = require("express");
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const axios = require("axios");
const ApiResponse = require("../Models/ApiResponse");
/* Route responsible for endpoints relating to speechAI */

router.post("/startTranscriptionJob", async (req, res) => {
  const response = new ApiResponse(res);
  // Get request data
  const newFormName = req.body.newFormName;
  let templateId = req.body.templateId;
  const triggerWords = req.body.triggerWords;

  // Create new pending form
  try {
    const pendingFormData = await axios.post(
      `${process.env.FORM_MICROSERVICE_BASE_URL}/templates/forms/template/${templateId}`,
      {
        newName: newFormName,
      }
    );

    console.log(pendingFormData.data.message);
    console.log("old templateId: " + templateId);
    templateId = pendingFormData.data.data[0]["_id"];
    console.log("templateId set to: " + templateId);
  } catch (err) {
    return response.badRequest400(err.toString());
  }

  // Start the transcription
  console.log("Starting new transcription job...");
  axios
    .post(`${process.env.AI_MICROSERVICE_BASE_URL}/startJob`, {
      data: {
        uri: "gs://audio_files_pivot_pioneers_hackathon2022/audiofile.webm",
      },
    })
    .then((transcriptionJobResponse) => {
      const operationsName = transcriptionJobResponse.data.data.operationsName;
      res.send(operationsName);
      const intervalId = setInterval(() => {
        axios
          .get(
            `${process.env.AI_MICROSERVICE_BASE_URL}/status/${operationsName}`
          )
          .then((statusResponse) => {
            const statusMessage = statusResponse.data.message;
            console.log(statusMessage);
            if (statusMessage === "The transcription has finished being made") {
              // Clear Interval
              clearInterval(intervalId);

              // Get Data and run mapping algorithm
              console.log("Attempting to get transcription data...");
              axios
                .get(
                  `${process.env.AI_MICROSERVICE_BASE_URL}/transcript/${operationsName}`
                )
                .then((transcriptData) => {
                  const transcript = transcriptData.data.data.transcript;
                  console.log(
                    "Attempting to map transcription data to trigger words..."
                  );
                  axios
                    .post(`${process.env.AI_MICROSERVICE_BASE_URL}/createMap`, {
                      data: {
                        keyPhrases: triggerWords,
                        transcription: transcript,
                      },
                    })
                    .then((mappingData) => {
                      const mapping = mappingData.data.data;
                      console.log(mapping);

                      const formValues = [];
                      for (const triggerWord in mapping) {
                        formValues.push({
                          inputId: `#${triggerWord}`,
                          value: mapping[triggerWord],
                        });
                      }

                      console.log(formValues);
                      // Write data to form
                      console.log("Attempting to write new data to form...");
                      axios
                        .patch(
                          `${process.env.FORM_MICROSERVICE_BASE_URL}/templates/fileData/${templateId}`,
                          { formValues: formValues }
                        )
                        .then((formWriteData) => {
                          console.log(formWriteData.data.message);

                          // Setting form status to complete
                          console.log(
                            "Attempting to set status of form to complete..."
                          );
                          axios
                            .patch(
                              `${process.env.FORM_MICROSERVICE_BASE_URL}/templates/forms/status/${templateId}?newStatus=completed`
                            )
                            .then((statusWriteData) => {
                              console.log(statusWriteData.data);
                              console.log("Final form id: " + templateId);
                            });
                        });
                    });
                });
            }
          });
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
