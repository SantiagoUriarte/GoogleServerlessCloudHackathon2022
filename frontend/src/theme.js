import { createTheme } from "@mui/material/styles";

const primary = "#A6E5E1"; // Cyan
const secondary = "#F5F9FF"; // Light blues
const defaultText = "#323232"; // Dark grey
const defaultText2 = "#F7F7F7"; // White
const defaultBackground = "#F7F7F7"; // White
export const lightSubtitleText = "#808080"; // Light Grey
export const pageBackground = "#323232"; // Dark Grey
export const defaultFont = "DM Sans";
export const headerFont = "Urbanist";
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
      secondary: defaultText2,
    },
    background: {
      paper: defaultBackground,
      default: defaultBackground,
    },
  },
  typography: {
    fontFamily: defaultFont,
    allVariants: {
      color: defaultText,
    },
  },
});
