import React, { Children } from "react";
import { Button, Container } from "@mui/material";

export default function SantiButton({ variant, icon, style, children }) {
  let showIcon = false;
  let haveBoxShadow = false;
  let buttonStyle = {
    padding: "10px 10px",
    width: "100%",
    borderRadius: "50px",
  };

  switch (variant) {
    case "normal":
      haveBoxShadow = true;
      buttonStyle["backgroundColor"] = "red";
      break;
    case "oAuth":
      showIcon = true;
      buttonStyle["backgroundColor"] = "blue";
      break;
    default:
      buttonStyle["backgroundColor"] = "green";
  }


  return (
    <Button
      variant="contained"
      elevation={haveBoxShadow ? 5 : 0}
      sx={{
        ...buttonStyle,
        ...style,
      }}
    >
      {showIcon ? icon : ""}
      {children}
    </Button>
  );
}
