import React, { useState, useEffect } from "react";
import { Button, Box, Modal } from "@mui/material";
import RecordBox from "../../components/RecordBox/RecordBox";
import FormHeader from "../../components/FormHeader/FormHeader";
import FormViewer from "../../components/FormViewer/FormViewer";
import InstructionModal from "../../components/InstructionModal/InstructionModal";
import { useParams } from "react-router-dom";
import binary from "bops";

const showTemplatePageStyle = {
  flexGrow: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default function ShowTemplatePage() {
  const [open, setOpen] = useState(false);
  const [template, setTemplate] = useState(null);
  const [htmlFormString, setHtmlFormString] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let params = useParams();
  console.log(template);
  useEffect(() => {
    fetch(
      `https://formservice-aoy5jyfbiq-wl.a.run.app/templates/template/${params.templateId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTemplate(data);
        const htmlData = data.data[0].fileData.data.data;
        const decoder = new TextDecoder("utf-8");
        setHtmlFormString(decoder.decode(new Uint8Array(htmlData)));
      });
    handleOpen();
  }, []);

  return (
    <Box sx={showTemplatePageStyle}>
      {template ? (
        <>
          <FormHeader title={params.templateName} />
          <FormViewer htmlSrc={htmlFormString} />
          {template.data[0].status != "template" ? (
            ""
          ) : (
            <RecordBox template={template} />
          )}
        </>
      ) : (
        ""
      )}
      <InstructionModal
        open={open}
        buttonText="CLOSE"
        handleClose={handleClose}
        header="How to create your SMART form"
      >
        1. Tap the <strong>record button</strong>.<br />
        2. Start your response by saying the <strong>trigger word</strong> (def:
        form category).
        <br />
        3. Follow up saying the trigger with
        <strong> answering each field aloud</strong>.
      </InstructionModal>
    </Box>
  );
}
