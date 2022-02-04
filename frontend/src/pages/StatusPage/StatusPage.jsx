import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { defaultFont } from "../../theme";

const StatusPage = () => {
  const [templateList, setTemplateList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/templates/forms/pending")
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

  const statusPageStyle = {
    display: "flex",
    flexDirection: "column",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    overflow: "scroll",
    width: "100%",
  };
  const processingItem = {
    display: "flex",
    backgroundColor: "#F5F9FF",
    alignItems: "center",
    borderRadius: "10px",
    padding: "8px 16px 8px 16px",
    gap: 2,
    marginBottom: 2,
  };

  const typographyStyle = {
    fontFamily: defaultFont,
    fontWeight: 400,
    fontSize: 17,
    lineHeight: "22px",
  };

  return (
    <Box sx={{ ...statusPageStyle }}>
      {templateList.length > 0
        ? templateList.map((template) => {
            return (
              <Box sx={{ ...processingItem }}>
                <CircularProgress />
                <Typography sx={{ ...typographyStyle }}>
                  {template.templateName}: Processing...
                </Typography>
              </Box>
            );
          })
        : ""}
    </Box>
  );
};

export default StatusPage;
