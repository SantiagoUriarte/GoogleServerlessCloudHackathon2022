import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
export default function TestTemplatePage() {
  const [templateList, setTemplateList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3002/templates/all")
      .then((response) => response.json())
      .then((data) => {
        data = data.data;
        const newTemplateList = [];
        data.forEach((template) => {
          newTemplateList.push({
            templateName: template.templateName,
            templateId: template["_id"],
          });
        });
        setTemplateList(newTemplateList);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px 0px" }}>
      <Typography sx={{ color: "white" }}>Select a template</Typography>
      {templateList.length > 0
        ? templateList.map((template) => {
            return (
              <Button
                key={template.templateId}
                component={RouterLink}
                to={`/${template.templateId}/${template.templateName}`}
                variant="contained"
              >
                {template.templateName}
              </Button>
            );
          })
        : "No Templates"}
    </Box>
  );
}
