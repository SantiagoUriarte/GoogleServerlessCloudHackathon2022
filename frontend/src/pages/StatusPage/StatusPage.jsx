import React, { useState, useEffect } from "react";
import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import { defaultFont } from "../../theme";

const StatusPage = () => {
  const [templateList, setTemplateList] = useState([]);
  useEffect(() => {
    fetch("https://formservice-aoy5jyfbiq-wl.a.run.app/templates/forms/pending")
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
    <Box elevation={5} sx={{ ...statusPageStyle }}>
      {templateList.length > 0
        ? templateList.map((template) => {
            return (
              <Paper elevation={5} sx={{ ...processingItem }}>
                <CircularProgress />
                <Typography sx={{ ...typographyStyle }}>
                  {template.templateName}: Processing...
                </Typography>
              </Paper>
            );
          })
        : ""}
    </Box>
  );
};

export default StatusPage;
