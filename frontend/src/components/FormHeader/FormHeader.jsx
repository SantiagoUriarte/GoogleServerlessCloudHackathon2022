import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const formHeaderStyle = {
  display: "flex",
  padding: "20px 0 10px 0",
  alignItems: "center",
  justifyContent: "center",
};

const textStyle = {
  fontSize: "40px",
};

const arrowIconStyle = {
  fontSize: "48px",
};

export default function FormHeader({ style, title }) {
  return (
    <Box
      sx={{
        ...formHeaderStyle,
        ...style,
      }}
    >
      <IconButton
        aria-label="delete"
        sx={{
          position: "absolute",
          left: 25,
        }}
      >
        <KeyboardArrowLeftIcon color="secondary" sx={arrowIconStyle} />
      </IconButton>
      <Typography display="inline" color="secondary" sx={textStyle}>
        {title}
      </Typography>
    </Box>
  );
}