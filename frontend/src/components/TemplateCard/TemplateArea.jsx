import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TemplateCard from "./TemplateCard";
import TemplateBurger from "../../components/TemplateCard/Images/TemplateBurger.png";
import { Grid } from "@mui/material";

const TemplateArea = () => {
  const [templateList, setTemplateList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/templates/all")
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

  const templateAreaStyle = {
    "@media (max-width: 700px)": {
      width: 375,
    },
  };
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    // <Box sx={templateAreaStyle}>
    <Grid container spacing={2} sx={{ ...templateAreaStyle }}>
      {templateList.length > 0
        ? templateList.map((template) => {
            return (
              <Grid item xs={6}>
                <TemplateCard
                  key={template.templateId}
                  to={`/${template.templateId}/${template.templateName}`}
                  image={TemplateBurger}
                  alt="Template Burger"
                  header={template.templateName}
                  description="In-N-Out Burgers"
                ></TemplateCard>
              </Grid>
            );
          })
        : ""}
    </Grid>
  );
};

export default TemplateArea;
