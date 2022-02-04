import React from "react";
import { Box, Paper, Typography, Avatar } from "@mui/material";
import { theme } from "../../theme";
import SearchBox from "../SearchBox/SearchBox";
import { palette } from "@mui/system";
import { headerFont } from "../../theme";

const Banner = ({
  image = "",
  Icon,
  placeholder,
  header,
  alt,
  description,
  style,
}) => {
  const containerStyle = {
    width: "100vw",
  };
  const bannerWrapperStyle = {
    backgroundColor: "#A6E5E1",
    borderRadius: "0px 0px 10px 10px",
    height: 125,
    padding: "24px 32px 16px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const typographyAndIconStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  };

  const typographyWrapperStyle = {
    maxWidth: 275,
    width: "100%",
  };
  let headerStyle = {
    fontSize: 21,
    fontWeight: 600,
    lineHeight: "25px",
    fontFamily: headerFont,
    paddingBottom: 1,
  };
  if (image !== "") {
    headerStyle = {
      ...headerStyle,
      paddingBottom: 0.2,
    };
  }
  const avatarStyle = {
    height: 60,
    width: 60,
    marginRight: 2,
  };
  let descriptionStyle = {
    fontSize: 13,
    lineHeight: "17px",
    paddingBottom: 1.5,
  };
  if (image !== "") {
    descriptionStyle = { ...descriptionStyle, paddingBottom: 3 };
  }
  return (
    <Box sx={{ ...containerStyle }}>
      <Paper elevation={5} sx={{ ...bannerWrapperStyle, ...style }}>
        <Box sx={{ ...typographyAndIconStyle }}>
          {image !== "" && (
            <Avatar sx={{ ...avatarStyle }} alt={alt} src={image} />
          )}
          <Box sx={{ ...typographyWrapperStyle }}>
            <Typography sx={{ ...headerStyle }}>{header}</Typography>
            <Typography sx={{ ...descriptionStyle }}>{description}</Typography>
          </Box>
          <Icon />
        </Box>
        <SearchBox placeholder={placeholder}></SearchBox>
      </Paper>
    </Box>
  );
};

export default Banner;
