import React from "react";
import { Box } from "@mui/material";
import form from "./exampleFormRestaurant.html?raw";

const formViewerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0",
};

const viewerContainerStyle = {
  height: "40vh",
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

export default function FormViewer({ style }) {
  return (
    <Box
      sx={{
        ...formViewerStyle,
        ...style,
      }}
    >
      <Box sx={viewerContainerStyle}>
        <iframe style={viewerStyle} srcDoc={form}></iframe>
      </Box>
    </Box>
  );
}
