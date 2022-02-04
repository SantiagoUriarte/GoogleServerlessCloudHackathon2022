"use strict";

const { response } = require("express");
const express = require("express");
const router = express.Router();

/* Route responsible for endpoints relating to speechAI */

router.get("/generateMap", async (req, res) => {
  // Poll the API until job is finished
  let jobName = req.data.name;
  let jobFinished = false;
  while (jobFinished === false) {
    const statusResponse = await fetch(
      `https://speechaiservice-aoy5jyfbiq-wl.a.run.app/status/${jobName}`
    );
    const statusJson = await statusResponse.json();

    if (statusJson.message === "The transcription has finished being made") {
      jobFinished = true;
    }
  }

  // Get transcription
  const transcriptionResponse = await fetch(
    `https://speechaiservice-aoy5jyfbiq-wl.a.run.app/transcript/${jobName}`
  );
  const transcriptionJson = await transcriptionResponse.json();

  const transcript = transcriptionJson.data.transcript;

  // Run separation algorithm
  const mapResponse = await fetch();
});

router.post("/startTranscriptionJob", async (req, res) => {
  // Get request data
  const templateId = req.body.templateId;
  const triggerWords = req.body.triggerWords;
  const audioFile = req.files.audio;

  // Create new pending form
  fetch(
    `${process.env.FORM_MICROSERVICE_BASE_URL}/pending/create/${templateId}`,
    {
      method: "POST",
    }
  );

  // Upload file
  const fd = new FormData();
  fd.append("file", audioFile);
  fetch(`${process.env.AI_MICROSERVICE_BASE_URL}/upload`, {
    method: "POST",
    body: fd,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
