import { createTheme } from "@mui/material/styles";

const primary = "#A6E5E1"; // Cyan
const secondary = "#F5F9FF"; // Light blues
const defaultText = "#F7F7F7"; // White
const defaultBackground = "#323232"; // Dark grey

export const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    text: {
      primary: defaultText,
    },
    background: {
      paper: defaultBackground,
      default: defaultBackground,
    },
  },
  typography: {
    allVariants: {
      color: defaultText,
    },
  },
});
