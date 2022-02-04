import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import FormDisplayCard from "../../components/FormDisplayCard/FormDisplayCard";
import Banner from "../../components/Banner/Banner";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const formsPageStyle = {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  display: "flex",
  flexWrap: "wrap",
  height: "100%",
  width: "100%",
  overflow: "auto",
};

const formDataCardListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: "100%",
};

export default function CompletedFormsPage() {
  const [completedForms, setCompletedForms] = useState([
    { templateId: 1, templateName: "Form 1", lastOpened: "7 mins ago" },
    { templateId: 2, templateName: "Form 2", lastOpened: "10 mins ago" },
    { templateId: 3, templateName: "Form 3", lastOpened: "3 mins ago" },
    { templateId: 4, templateName: "Form 4", lastOpened: "15 mins ago" },
    { templateId: 5, templateName: "Form 5", lastOpened: "2 mins ago" },
    { templateId: 6, templateName: "Form 6", lastOpened: "30 mins ago" },
    { templateId: 7, templateName: "Form 7", lastOpened: "9 mins ago" },
  ]);

  return (
    <Box sx={formsPageStyle}>
      <Box sx={formDataCardListStyle}>
        {completedForms.map((completedForm) => {
          return (
            <FormDisplayCard
              key={completedForm.templateId}
              title={completedForm.templateName}
              subtitle={`Last Opened: ${completedForm.lastOpened}`}
            />
          );
        })}
      </Box>
    </Box>
  );
}
