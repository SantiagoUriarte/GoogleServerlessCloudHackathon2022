import React, { useState, useEffect } from "react";
import { Button, Box, Modal } from "@mui/material";
import RecordBox from "../../components/RecordBox/RecordBox";
import FormHeader from "../../components/FormHeader/FormHeader";
import FormViewer from "../../components/FormViewer/FormViewer";
import InstructionModal from "../../components/InstructionModal/InstructionModal";
import { useParams } from "react-router-dom";

const showTemplatePageStyle = {
  flexGrow: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default function ShowTemplatePage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showModal, setShowModal] = useState(true);
  let params = useParams();
  useEffect(() => {
    console.log(params.templateId);
    handleOpen();
  }, []);

  return (
    <Box sx={showTemplatePageStyle}>
      <FormHeader title={params.templateName} />
      <FormViewer />
      <RecordBox />
      <InstructionModal
        open={open}
        buttonText="CLOSE"
        handleClose={handleClose}
        header="How to create your SMART form"
      >
        1. Tap the record button and fill out your smart form by answering each
        field aloud. <br />
        2. Start your response by saying the trigger word (e.g. category) for
        the most accurate form transcription.
      </InstructionModal>
    </Box>
  );
}
