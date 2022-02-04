import { withTheme } from "@emotion/react";
import React from "react";
import TemplateImage from "./Images/TemplateImageSquare.png";
const TemplatePreview = () => {
  const previewStyle = {
    borderRadius: "10px",
  };
  return (
    <img src={TemplateImage} style={{ ...previewStyle }} alt="Template"></img>
  );
};

export default TemplatePreview;
