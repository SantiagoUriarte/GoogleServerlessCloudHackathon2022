import React from "react";
import { Button, Box } from "@mui/material";

const showTemplatePageStyle = {
  height: "100%",
  width: "100%",
};

export default function ShowTemplatePage() {
  return (
    <Box sx={showTemplatePageStyle}>
      <h1>Hello World</h1>
      <Button variant="contained">Click me</Button>
    </Box>
  );
}
