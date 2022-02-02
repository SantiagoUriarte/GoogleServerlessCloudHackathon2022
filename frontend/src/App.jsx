import { Container } from "@mui/material";
import React from "react";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import { Outlet, Link, useNavigate } from "react-router-dom";
import TemplatePage from "./pages/TemplatePage/TemplatePage";

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
