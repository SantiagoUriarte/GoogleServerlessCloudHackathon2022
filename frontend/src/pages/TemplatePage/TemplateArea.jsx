import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import TemplateCard from "../../components/TemplateCard/TemplateCard";
import TemplateBurger from "../../components/TemplateCard/Images/TemplateBurger.png";
import { Box } from "@mui/material";
import ProfilePic from "../../components/TemplateCard/Images/ProfilePic.png";
import Banner from "../../components/Banner/Banner";

const TemplateArea = () => {
  const templateAreaStyle = {
    maxWidth: 375,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: 480,
    gap: "24px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };
  return (
    <Box sx={templateAreaStyle}>
      <TemplateCard
        image={TemplateBurger}
        alt="Template Burger"
        header="In-Person Order"
        description="In-N-Out Burgers"
      ></TemplateCard>
      <TemplateCard
        image={TemplateBurger}
        alt="Template Burger"
        header="In-Person Order"
        description="In-N-Out Burgers"
      ></TemplateCard>
      <TemplateCard
        image={TemplateBurger}
        alt="Template Burger"
        header="In-Person Order"
        description="In-N-Out Burgers"
      ></TemplateCard>
      <TemplateCard
        image={TemplateBurger}
        alt="Template Burger"
        header="In-Person Order"
        description="In-N-Out Burgers"
      ></TemplateCard>
      <TemplateCard
        image={TemplateBurger}
        alt="Template Burger"
        header="In-Person Order"
        description="In-N-Out Burgers"
      ></TemplateCard>
      <TemplateCard
        image={TemplateBurger}
        alt="Template Burger"
        header="In-Person Order"
        description="In-N-Out Burgers"
      ></TemplateCard>
    </Box>
  );
};

export default TemplateArea;
