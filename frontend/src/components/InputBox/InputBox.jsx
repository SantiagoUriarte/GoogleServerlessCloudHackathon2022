import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  FilledInput,
  Box,
} from "@mui/material";
const InputBox = ({ style, onSubmitFunc, variant }) => {
  const [values, setValues] = React.useState("");
  let showAdornment = false;
  switch (variant) {
    case "text":
      break;
    case "password":
      showAdornment = true;
      break;
    default:
      break;
  }

  return (
    <Box sx={{ ...style }}>
      <FilledInput
        onChange={(e) => {
          const newValue = e.target.value;
          setValues(newValue);
          onSubmitFunc(newValue);
        }}
        sx={{
          borderRadius: 30,
          backgroundColor: "white",
          width: 311,
          height: 40,
        }}
        value={values.password}
        endAdornment={
          showAdornment ? (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : (
            ""
          )
        }
      />
    </Box>
  );
};

export default InputBox;