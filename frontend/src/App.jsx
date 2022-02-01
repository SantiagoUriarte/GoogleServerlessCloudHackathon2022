import { Container } from "@mui/material";
import React from "react";
import ShowTemplatePage from "./pages/ShowTemplatePage/ShowTemplatePage";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";

const containerStyle = {
  padding: 0,
};
export default function App() {
  return (
    <Container sx={containerStyle}>
      <ShowTemplatePage />
      <BottomNavbar />
    </Container>
  );
}
