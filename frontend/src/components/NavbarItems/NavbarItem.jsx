import React from "react";
import { Typography, Box } from "@mui/material";

const navbarItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const iconStyle = {
  fontSize: "20px",
  margin: "5px 0",
};

const typographyStyle = {
  fontSize: "10px",
  fontWeight: 300,
};

export default function NavbarItem({ Icon, color, style, label }) {
  return (
    <Box
      sx={{
        ...navbarItemStyle,
        ...style,
      }}
    >
      <Icon color={color} sx={iconStyle} />
      <Typography color={color} variant="h5" sx={typographyStyle}>
        {label}
      </Typography>
    </Box>
  );
}
