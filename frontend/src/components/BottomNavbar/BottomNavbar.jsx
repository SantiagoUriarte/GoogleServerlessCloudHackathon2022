import { Box } from "@mui/material";
import React from "react";
import NavbarItem from "../../components/NavbarItems/NavbarItem";

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
  return (
    <Box
      sx={{
        ...containerStyle,
        ...style,
      }}
    >
      <Box sx={navbarStyle}>
        <NavbarItem color="secondary" Icon={HomeOutlinedIcon} label="HOME" />
        <NavbarItem
          color="secondary"
          Icon={RotateLeftOutlinedIcon}
          label="STATUS"
        />
        <NavbarItem
          color="primary"
          Icon={FileCopyOutlinedIcon}
          label="TEMPLATES"
        />
        <NavbarItem
          color="secondary"
          Icon={LibraryAddCheckOutlinedIcon}
          label="FORMS"
        />
        
      </Box>
      <Box sx={bottomBoxStyle}>
        <Box sx={decorationBoxStyle}></Box>
      </Box>
    </Box>
  );
}
