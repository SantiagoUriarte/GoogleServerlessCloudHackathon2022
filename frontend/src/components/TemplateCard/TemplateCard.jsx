import React from "react";
import { Link } from "react-router-dom";
import TemplateCaption from "./TemplateCaption";
import TemplatePreview from "./TemplatePreview";
import { Box } from "@mui/material";
const TemplateCard = ({ image, header, description, alt, to }) => {
  const templateCardStyle = {
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    backgroundColor: "white",
    borderRadius: "10px",
  };

  return (
    <Box component={Link} to={to} sx={{ ...templateCardStyle }}>
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
