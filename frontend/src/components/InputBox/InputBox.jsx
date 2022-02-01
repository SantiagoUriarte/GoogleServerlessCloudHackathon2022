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

//    <InputAdornment position="end">
//   <IconButton
//     aria-label="toggle password visibility"
//     onClick={handleClickShowPassword}
//     onMouseDown={handleMouseDownPassword}
//     edge="end"
//   >
//     {values.showPassword ? <VisibilityOff /> : <Visibility />}
//   </IconButton>
// </InputAdornment>;

export default InputBox;

{
  /* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
  <OutlinedInput
    id="outlined-adornment-password"
    type={values.showPassword ? "text" : "password"}
    value={values.password}
    onChange={handleChange("password")}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {values.showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
    label="Password"
  />
</FormControl>; */
}
