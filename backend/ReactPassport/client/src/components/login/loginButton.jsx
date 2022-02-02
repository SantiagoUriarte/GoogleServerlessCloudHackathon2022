import React from "react";
import { Button, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const loginButton = ({ children, icon, style, variant }) => {
  const iconSelection = ({ icon }) => {
    if (icon === "google") {
      return <GoogleIcon></GoogleIcon>;
    } else if (icon === "apple") {
      return <AppleIcon></AppleIcon>;
    }
  };

  let buttonStyle = {
    maxWidth: 311,
    height: 40,
    borderRadius: 30,
  };

  switch (variant) {
    case "standard":
      buttonStyle["backgroundColor"] = "#A6E5E1";
  }

  return (
    <Button variant="contained" sx={{ ...buttonStyle, ...style }}>
      {icon !== "" && iconSelection(icon)}
      {children}
    </Button>
  );
};

export default loginButton;
