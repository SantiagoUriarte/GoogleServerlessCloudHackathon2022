import React from "react";
import { Box, Paper, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { theme, lightSubtitleText } from "../../theme";
import { Link } from "react-router-dom";

const displayCardStyle = {
  display: "flex",
  backgroundColor: theme.palette.background.paper,
  alignContent: "center",
  justifyContent: "space-between",
  padding: "20px 20px",
  borderRadius: "10px",
  textDecoration: "none",
};
const textInfoContainerStyle = {
  "& .title": {
    fontSize: "18px",
  },
  "& .subtitle": {
    color: lightSubtitleText,
    fontSize: "12px",
  },
};
const iconButtonStyle = {};
export default function FormDisplayCard({
  title,
  templateId,
  subtitle,
  style,
}) {
  return (
    <Paper
      sx={{
        ...displayCardStyle,
        ...style,
      }}
      elevation={5}
      component={Link}
      to={`/${templateId}/${title}`}
    >
      <Box sx={textInfoContainerStyle}>
        <Typography className="title">{title}</Typography>
        <Typography color="inherit" className="subtitle">
          {subtitle}
        </Typography>
      </Box>
      <IconButton sx={iconButtonStyle}>
        <MoreVertIcon />
      </IconButton>
    </Paper>
  );
}
