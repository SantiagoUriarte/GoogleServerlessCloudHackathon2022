import { Box } from "@mui/material";
import React from "react";
import NavbarItem from "../../components/NavbarItems/NavbarItem";

const containerStyle = {
  width: "100vw",
  position: "fixed",
  bottom: 0,
  left: 0,
};

const navbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  height: "60px",
  boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "15px 15px 0px 0px",
  alignItems: "center",
  zIndex: "0",
};

const bottomBoxStyle = {
  display: "flex",
  bottom: 0,
  height: "30px",
  zIndex: "1",
  alignItems: "center",
  justifyContent: "center",
};

const decorationBoxStyle = {
  width: "134px",
  height: "5px",
  zIndex: "2",
  backgroundColor: "white",
  borderRadius: "10px",
};

export default function BottomNavbar({ style }) {
  return (
    <Box
      sx={{
        ...containerStyle,
        ...style,
      }}
    >
      <Box sx={navbarStyle}>
        <NavbarItem color="secondary" icon="home_outlined" label="Home" />
        <NavbarItem
          color="secondary"
          icon="rotate_left_outlined"
          label="Status"
        />
        <NavbarItem
          color="primary"
          icon={"file_copy_outlined"}
          label="Templates"
        />
        <NavbarItem
          color="secondary"
          icon={"library_add_check_outlined"}
          label="Forms"
        />
      </Box>
      <Box sx={bottomBoxStyle}>
        <Box sx={decorationBoxStyle}></Box>
      </Box>
    </Box>
  );
}
