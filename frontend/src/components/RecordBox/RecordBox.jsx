import React, { useState } from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import MicOffOutlinedIcon from "@mui/icons-material/MicOffOutlined";
import { theme, pageBackground } from "../../theme.js";
import { ReactMic } from "react-mic";
const recordBoxStyle = {
  display: "flex",
  padding: "30px 0 30px 0",
  flexDirection: "column",
  alignItems: "center",
};

const circleButtonStyle = {
  padding: "24px",
  backgroundColor: theme.palette.primary.main,
  filter: "drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25))",
  borderRadius: "50%",
};

const micIconStyle = {
  color: "black",
  fontSize: "32px",
};

const labelStyle = {
  marginTop: "20px",
  fontSize: "21px",
  color: theme.palette.text.secondary,
};

export default function RecordBox({ style, template }) {
  const [record, setRecord] = useState(false);

  const toggleRecording = () => {
    setRecord(!record);
  };

  const submitRecording = (recordingBlob) => {
    const templateData = template.data[0];
    console.log("Recording finished");
    console.log(templateData);
    let audioFilename = templateData["_id"];
    audioFilename += new Date().getTime().toString();
    audioFilename += ".webm";

    const audiofile = new File([recordingBlob.blob], audioFilename, {
      type: "audio/webm",
    });
    const fd = new FormData();
    fd.append("file", audiofile);

    const newFileName = prompt("Recording saved! Name the new completed form");
    if (newFileName == null || newFileName == "") {
      alert("Transcription cancelled!");
    } else {
      // Upload Audio
      fetch("https://speechaiservice-aoy5jyfbiq-wl.a.run.app/upload", {
        headers: { Accept: "application/json" },
        method: "POST",
        body: fd,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const cloudBucketUri = data.url;
          console.log(cloudBucketUri);

          // Start Transcription
          fetch(
            "https://gatewayservice-aoy5jyfbiq-wl.a.run.app/api/speechAI/startTranscriptionJob",
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({
                newFormName: newFileName,
                templateId: templateData["_id"],
                triggerWords: templateData.triggerWords,
                audioCloudUri: cloudBucketUri,
              }),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Box sx={{ ...recordBoxStyle, ...style }}>
      <ReactMic
        record={record}
        visualSetting="sinewave"
        onStop={(recordingBlob) => submitRecording(recordingBlob)}
        backgroundColor={pageBackground}
        strokeColor={theme.palette.primary.main}
        sampleRate={4800}
      />
      <Button
        onClick={toggleRecording}
        variant="contained"
        sx={circleButtonStyle}
      >
        {record ? (
          <MicOffOutlinedIcon sx={micIconStyle} />
        ) : (
          <KeyboardVoiceOutlinedIcon sx={micIconStyle} />
        )}
      </Button>

      {record ? (
        <Typography sx={labelStyle}>Tap to stop</Typography>
      ) : (
        <Typography sx={labelStyle}>Tap to record</Typography>
      )}
    </Box>
  );
}
