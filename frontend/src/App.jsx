import { Container } from "@mui/material";
import React, { useEffect } from "react";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage/TemplatePage";
import Banner from "./components/Banner/Banner";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
const containerStyle = {
  height: "100vh",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "85%",
  maxWidth: 375,
};
export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  let bannerObject = {
    Icon: "",
    placeholder: "",
    header: "",
    description: "",
  };
  switch (location.pathname) {
    case "/templates":
      bannerObject = {
        Icon: FileUploadOutlinedIcon,
        placeholder: "Search all templates",
        header: "Templates",
        description: "Select a template to create your SMART transcripted form",
      };
      break;
    case "/status":
      bannerObject = {
        Icon: RefreshIcon,
        placeholder: "Search all forms",
        header: "Status",
        description: "Check the progress of your SMART forms.",
      };

      break;
    case "/forms":
      bannerObject = {
        Icon: AddIcon,
        placeholder: "Search all forms",
        header: "Form",
        description: "See all your SMART forms here.",
      };
      break;
    default:
      break;
  }
  return (
    <Container sx={containerStyle}>
      {(location.pathname === "/forms" || location.pathname === "/status" ||
        location.pathname === "/templates") && (
          <Banner
            Icon={bannerObject.Icon}
            placeholder={bannerObject.placeholder}
            header={bannerObject.header}
            description={bannerObject.description}
            style={{ marginBottom: "24px", position: "sticky" }}
          />
        )}
      <Outlet />
      <BottomNavbar />
    </Container>
  );
}
