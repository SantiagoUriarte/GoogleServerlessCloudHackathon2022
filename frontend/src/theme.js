import { createTheme } from "@mui/material/styles";

const primary = "#042939";
const secondary = "#C0C3A1";
const defaultText = "#0F172A";
const defaultBackground = "#F1F5F9";

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
