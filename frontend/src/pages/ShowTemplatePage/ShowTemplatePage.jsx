import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import RecordBox from "../../components/RecordBox/RecordBox";
import FormHeader from "../../components/FormHeader/FormHeader";
import FormViewer from "../../components/FormViewer/FormViewer";
import { useParams } from "react-router-dom";

const showTemplatePageStyle = {
  flexGrow: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default function ShowTemplatePage() {
  let params = useParams();
  useEffect(() => {
    console.log(params.templateId);
  }, []);

  return (
    <Box sx={showTemplatePageStyle}>
      <FormHeader title={params.templateName} />
      <FormViewer />
      <RecordBox />
    </Box>
  );
}
