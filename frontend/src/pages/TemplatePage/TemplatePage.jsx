import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import TemplateCard from "../../components/TemplateCard/TemplateCard";
import TemplateBurger from "../../components/TemplateCard/Images/TemplateBurger.png";
import { Box } from "@mui/material";
import ProfilePic from "../../components/TemplateCard/Images/ProfilePic.png";
import Banner from "../../components/Banner/Banner";
import TemplateArea from "./TemplateArea";
import BottomNavBar from "../../components/BottomNavbar/BottomNavbar";
const TemplatePage = () => {
  const templatePageStyle = {
    maxWidth: 375,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  return (
    <Box sx={templatePageStyle}>
      <Banner
        Icon={FileUploadOutlinedIcon}
        placeholder="Search all templates"
        header="Templates"
        description={
          "Select a template to create your SMART transcripted form."
        }
        style={{ marginBottom: "24px" }}
      ></Banner>
      <TemplateArea></TemplateArea>
      <BottomNavBar></BottomNavBar>
    </Box>
  );
};

export default TemplatePage;
