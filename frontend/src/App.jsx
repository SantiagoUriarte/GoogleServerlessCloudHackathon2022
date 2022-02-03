import { Container } from "@mui/material";
import React from "react";
import ShowTemplatePage from "./pages/ShowTemplatePage/ShowTemplatePage";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import LoginButton from "./components/LoginButton/LoginButton";
import InputBox from "./components/InputBox/InputBox";
import LoginWrapper from "./components/LoginWrapper/LoginWrapper";
import { Outlet, Link, useNavigate } from "react-router-dom";

const containerStyle = {
  height: "100vh",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "85%",
};
export default function App() {
  const navigate = useNavigate();

  return (
    <Container sx={containerStyle}>
      <Outlet />
      <BottomNavbar />
    </Container>
  );
}
