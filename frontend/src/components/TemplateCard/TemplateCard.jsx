import React from "react";
import TemplateCaption from "./TemplateCaption";
import TemplatePreview from "./TemplatePreview";
import { Box } from "@mui/material";
const TemplateCard = ({ image, header, description, alt }) => {
  const templateCardStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <Box sx={{ ...templateCardStyle }}>
      <TemplatePreview></TemplatePreview>
      <TemplateCaption
        image={image}
        header={header}
        description={description}
        alt={alt}
      ></TemplateCaption>
    </Box>
  );
};

export default TemplateCard;
