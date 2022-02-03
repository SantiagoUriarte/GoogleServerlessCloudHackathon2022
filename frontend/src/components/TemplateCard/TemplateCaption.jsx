import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { headerFont } from "../../theme";
const TemplateCaption = ({ image, header, description, alt }) => {
  const templateCaptionStyle = {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "0 0 10px 10px",
    padding: "8px",
  };
  const avatarStyle = {
    width: 24,
    height: 24,
  };
  const templateCaptionHeaderStyle = {
    fontFamily: headerFont,
    fontSize: 13,
    fontWeight: 500,
  };
  const templateCaptionSubtitleStyle = {
    fontFamily: headerFont,
    fontSize: 10,
    fontWeight: 400,
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
