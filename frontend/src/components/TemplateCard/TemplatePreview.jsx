import React from "react";
import TemplateImage from "./Images/TemplateImage.png";
const TemplatePreview = () => {
  const previewStyle = {
    width: 144,
    height: 136,
  };
  return (
    <img src={TemplateImage} style={{ ...previewStyle }} alt="Template"></img>
  );
};

export default TemplatePreview;
