import { Paper } from "@mui/material";
import React from "react";

const bottomNavbarStyle = {
  height: "64px",
  width: "100%",
  borderRadius: "10px 10px 0px 0px"
};

export default function BottomNavbar({ style }) {
  return (
    <Box
      sx={{
        ...bottomNavbarStyle,
        ...style,
      }}
    ></Box>
  );
}
