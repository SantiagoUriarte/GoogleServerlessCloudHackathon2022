import React from "react";
import { Typography, Icon, Box } from "@mui/material";

const navbarItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "12px",
};

export default function NavbarItem({ icon, color, style, label }) {
  return (
    <Box
      sx={{
        ...navbarItemStyle,
        ...style,
      }}
    >
      <Icon color={color} fontSize="medium">
        {icon}
      </Icon>
      <Typography color={color} variant="inherit">
        {label}
      </Typography>
    </Box>
  );
}
