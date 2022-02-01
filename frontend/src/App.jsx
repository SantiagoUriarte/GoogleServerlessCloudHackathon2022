import { Container } from "@mui/material";
import React from "react";
import ShowTemplatePage from "./pages/ShowTemplatePage/ShowTemplatePage";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import BottomNavbarSpacer from "./components/BottomNavbarSpacer/BottomNavbarSpacer";
import LoginButton from "./components/LoginButton/LoginButton";
import InputBox from "./components/InputBox/InputBox";
import LoginWrapper from "./components/LoginWrapper/LoginWrapper";

const containerStyle = {
  height: "100vh",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "90%",
};
export default function App() {
  return (
    <Container sx={containerStyle}>
      <ShowTemplatePage />
      {/* <BottomNavbarSpacer /> */}
      <BottomNavbar />
      <LoginWrapper></LoginWrapper>
    </Container>
  );
}
