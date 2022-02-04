import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ placeholder }) => {
  const searchBoxStyle = {
    backgroundColor: "#F7F7F7",
    borderRadius: 30,
    maxWidth: 375,
    width: "100%",
    height: 40,
    "& .MuiOutlinedInput-root": {
      borderRadius: 30,
      maxWidth: 375,
      width: "100%",
      height: 40,
    },
  };
  return (
    <TextField
      placeholder={placeholder}
      id="outlined-start-adornment"
      sx={{
        ...searchBoxStyle,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
