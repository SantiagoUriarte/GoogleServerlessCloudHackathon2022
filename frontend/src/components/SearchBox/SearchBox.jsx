import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  const searchBoxStyle = {
    m: 1,
    width: "25ch",
    backgroundColor: "#F7F7F7",
    borderRadius: 30,
    maxWidth: 311,
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: 30,
      maxWidth: 311,
      width: "100%",
    },
  };
  return (
    <TextField
      placeholder="Search"
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
