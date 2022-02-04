import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { headerFont } from "../../theme";
const TemplateCaption = ({ image, header, description, alt }) => {
  const templateCaptionStyle = {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "20px",
    padding: "8px",
    "@media (max-width: 700px)": {
      borderRadius: "0 0 10px 10px",
    },
  };
  const avatarStyle = {
    width: 24,
    height: 24,
  };
  const templateCaptionHeaderStyle = {
    fontFamily: headerFont,
    textDecoration: "none",
    fontSize: 16,
    fontWeight: 600,
    overflowWrap: "anywhere",
    "@media (max-width: 700px)": {
      fontSize: 13,
    },
  };
  const templateCaptionSubtitleStyle = {
    fontFamily: headerFont,
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 400,
    "@media (max-width: 700px)": {
      fontSize: 10,
    },
  };

  return (
    <Box sx={{ ...templateCaptionStyle }}>
      <Box>
        <Avatar src={image} alt={alt} sx={{ ...avatarStyle }}></Avatar>
      </Box>
      <Box>
        <Typography sx={{ ...templateCaptionHeaderStyle }}>{header}</Typography>
        <Typography sx={{ ...templateCaptionSubtitleStyle }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default TemplateCaption;
