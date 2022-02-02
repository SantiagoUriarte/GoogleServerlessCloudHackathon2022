import React from "react";
import { Typography, Button } from "@mui/material";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { theme } from "../../theme";
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

export default function NavbarItem({ Icon, to, style, label }) {
  return (
    <Button
      component={NavLink}
      style={(isActive) => {
        return {
          color: isActive.isActive
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
        };
      }}
      to={to}
      sx={{
        ...navbarItemStyle,
        ...style,
      }}
    >
      <Icon sx={iconStyle} color="inherit" />
      <Typography color="inherit" sx={typographyStyle}>
        {label}
      </Typography>
    </Button>
  );
}
