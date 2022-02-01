import React from "react";
import { Button, Box } from "@mui/material";
import RecordBox from "../../components/RecordBox/RecordBox";
import FormHeader from "../../components/FormHeader/FormHeader";
import FormViewer from "../../components/FormViewer/FormViewer";

const showTemplatePageStyle = {
  flexGrow: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default function ShowTemplatePage() {
  return (
    <Box sx={showTemplatePageStyle}>
      <FormHeader title="New Form" />
      <FormViewer style={{ marginTop: "-25px" }} />
      <RecordBox />
    </Box>
  );
}
