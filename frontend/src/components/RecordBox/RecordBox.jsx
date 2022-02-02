import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import { theme } from "../../theme.js";
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
  return (
    <Box sx={{ ...recordBoxStyle, ...style }}>
      <IconButton aria-label="delete" sx={circleButtonStyle}>
        <MicNoneOutlinedIcon sx={micIconStyle} />
      </IconButton>
      <Typography sx={labelStyle}>Tap to record</Typography>
    </Box>
  );
}
