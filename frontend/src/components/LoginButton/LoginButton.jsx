import React from "react";
import { Button, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";

const LoginButton = ({ children, icon, sx, variant, apple, auth, onClick }) => {
  let logo = <GoogleIcon></GoogleIcon>;
  if (apple) {
    logo = <AppleIcon></AppleIcon>;
  }

  let buttonStyle = {
    maxWidth: 311,
    width: "100%",
    height: 40,
    borderRadius: 30,
    textTransform: "none",
  };

  if (auth) {
    buttonStyle = {
      maxWidth: 311,
      width: "100%",
      height: 40,
      borderRadius: 30,
      textTransform: "none",
      gap: 1,
      backgroundColor: "white",
    };
  }

  return (
    <Button
      component={Link}
      to={"/templates"}
      onClick={onClick}
      variant="contained"
      sx={{ ...buttonStyle, ...sx }}
    >
      {icon && logo}
      {children}
    </Button>
  );
};

export default LoginButton;
