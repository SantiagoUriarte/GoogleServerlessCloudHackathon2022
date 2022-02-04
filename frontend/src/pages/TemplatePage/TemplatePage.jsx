import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import TemplateCard from "../../components/TemplateCard/TemplateCard";
import TemplateBurger from "../../components/TemplateCard/Images/TemplateBurger.png";
import { Box } from "@mui/material";
import ProfilePic from "../../components/TemplateCard/Images/ProfilePic.png";
import Banner from "../../components/Banner/Banner";
import TemplateArea from "../../components/TemplateCard/TemplateArea";
import BottomNavBar from "../../components/BottomNavbar/BottomNavbar";
const TemplatePage = () => {
  const templatePageStyle = {
    maxWidth: 700,
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  };
  return (
    <Box sx={templatePageStyle}>
      <TemplateArea />
    </Box>
  );
};

export default TemplatePage;
