import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const formViewerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0",
  height: "40vh",
  flexGrow: 1,
};

const viewerContainerStyle = {
  height: "100%",
  width: "100%",
  position: "relative",
  border: "0.5em solid #ffffff",
  borderRadius: "5px",
  overflow: "hidden",
};

const viewerStyle = {
  position: "absolute",
  display: "block",
  width: "100%",
  height: "100%",
  margin: "auto",
  border: 0,
};

export default function FormViewer({ style, htmlSrc }) {
  return (
    <Box
      sx={{
        ...formViewerStyle,
        ...style,
      }}
    >
      <Box sx={viewerContainerStyle}>
        <iframe style={viewerStyle} srcDoc={htmlSrc}></iframe>
      </Box>
    </Box>
  );
}
