import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link as RouterLink } from "react-router-dom";
const formHeaderStyle = {
  display: "flex",
  padding: "30px 0 30px 0",
  alignItems: "center",
  justifyContent: "center",
};

const textStyle = {
  fontSize: "20px",
};

const arrowIconStyle = {
  fontSize: "30px",
};

export default function FormHeader({ style, title }) {
  return (
    <Box
      sx={{
        ...formHeaderStyle,
        ...style,
      }}
    >
      <IconButton
        component={RouterLink}
        to={"/templates"}
        aria-label="delete"
        sx={{
          position: "absolute",
          left: 25,
        }}
      >
        <KeyboardArrowLeftIcon color="secondary" sx={arrowIconStyle} />
      </IconButton>
      <Typography display="inline" color="secondary" sx={textStyle}>
        {title}
      </Typography>
    </Box>
  );
}
