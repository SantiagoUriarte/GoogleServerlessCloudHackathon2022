import { withTheme } from "@emotion/react";
import React from "react";
import TemplateImage from "./Images/TemplateImagex4.png";
const TemplatePreview = () => {
  const previewStyle = {
  };
  return (
    <img src={TemplateImage} style={{ ...previewStyle }} alt="Template"></img>
  );
};

export default TemplatePreview;
