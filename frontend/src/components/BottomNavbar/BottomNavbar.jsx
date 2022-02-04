import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";

const containerStyle = {
  width: "100vw",

};
const navbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  height: "60px",
  boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "15px 15px 0px 0px",
  alignItems: "center",
  zIndex: "100",
  backgroundColor: "#323232",
};

const bottomBoxStyle = {
  display: "flex",
  bottom: 0,
  height: "30px",
  zIndex: "200",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#323232",
};

const decorationBoxStyle = {
  width: "134px",
  height: "5px",
  zIndex: "300",
  backgroundColor: "white",
  borderRadius: "10px",
};

export default function BottomNavbar({ style }) {
  useEffect(() => {
    console.log("Navbar has rendered");
  }, []);
  return (
    <Box
      sx={{
        ...containerStyle,
        ...style,
      }}
    >
      <Box sx={navbarStyle}>
        {/* <NavbarItem Icon={HomeOutlinedIcon} label="HOME" to="/home" /> */}
        <NavbarItem Icon={RotateLeftOutlinedIcon} to="/status" label="STATUS" />
        <NavbarItem
          Icon={FileCopyOutlinedIcon}
          label="TEMPLATES"
          to="/templates"
        />
        <NavbarItem
          Icon={LibraryAddCheckOutlinedIcon}
          label="FORMS"
          to="/forms"
        />
      </Box>
      <Box sx={bottomBoxStyle}>
        <Box sx={decorationBoxStyle}></Box>
      </Box>
    </Box>
  );
}
