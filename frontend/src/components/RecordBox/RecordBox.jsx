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

export default function RecordBox({ style }) {
  const [record, setRecord] = useState(false);

  const toggleRecording = () => {
    setRecord(!record);
  };

  const submitRecording = (recordingBlob) => {
    console.log("Recording finished");
    console.log(recordingBlob);

    const newFormName = prompt("Recording saved! Enter new file name");
    if (newFormName == null || newFormName == "") {
      alert("Invalid name!");
    } else {
      alert(`Transcription job started for file: ${newFormName}`);
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
        mimeType="audio/wav"
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

      <Typography sx={labelStyle}>Tap to record</Typography>
    </Box>
  );
}
