import React, { useState, useEffect } from "react";
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
    {
      templateId: 1,
      templateName: "No Completed Forms Yet",
      lastUpdatedAt: new Date(),
    },
  ]);

  useEffect(() => {
    fetch(
      "https://formservice-aoy5jyfbiq-wl.a.run.app/templates/forms/completed"
    )
      .then((response) => response.json())
      .then((data) => {
        data = data.data;
        console.log(data);

        const newCompletedForms = [];
        data.forEach((completedForm) => {
          newCompletedForms.push({
            templateId: completedForm["_id"],
            templateName: completedForm.templateName,
            lastUpdatedAt: new Date(completedForm.updatedAt),
          });
        });
        console.log(newCompletedForms);
        setCompletedForms(newCompletedForms);
      });
  }, []);

  return (
    <Box sx={formsPageStyle}>
      <Box sx={formDataCardListStyle}>
        {completedForms.map((completedForm) => {
          return (
            <FormDisplayCard
              key={completedForm.templateId}
              templateId={completedForm.templateId}
              title={completedForm.templateName}
              subtitle={`Last updated: ${completedForm.lastUpdatedAt?.toLocaleDateString()}`}
            />
          );
        })}
      </Box>
    </Box>
  );
}
