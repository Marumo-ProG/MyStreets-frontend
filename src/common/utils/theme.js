import "@fontsource/manrope";
import { createTheme } from "@mui/material/styles";
import { Colors } from "./constants";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.dark_brown,
      light: Colors.peach,
      dark: Colors.dark_brown,
    },
    secondary: {
      main: Colors.peach,
    },
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    fontSize: 20,
    h1: {
      fontWeight: 700,
      fontSize: "56px",
      textTransform: "uppercase",
      color: Colors.black,
      lineHeight: "58px",
      letterSpacing: "2px",
      fontFamily: "'Manrope', sans-serif",
    },
    h2: {
      fontWeight: 700,
      fontSize: "40px",
      color: Colors.black,
      textTransform: "uppercase",
      lineHeight: "44px",
      letterSpacing: "1.5px",
      fontFamily: "'Manrope', sans-serif",
    },
    h3: {
      fontWeight: 700,
      fontSize: "32px",
      color: Colors.black,
      textTransform: "uppercase",
      lineHeight: "36px",
      letterSpacing: "1.15px",
      fontFamily: "'Manrope', sans-serif",
    },
    h4: {
      fontWeight: 700,
      fontSize: "28px",
      color: Colors.black,
      textTransform: "uppercase",
      lineHeight: "38px",
      letterSpacing: "2px",
      fontFamily: "'Manrope', sans-serif",
    },
    h5: {
      fontWeight: 700,
      fontSize: "24px",
      color: Colors.black,
      textTransform: "uppercase",
      lineHeight: "33px",
      letterSpacing: "1.7px",
      fontFamily: "'Manrope', sans-serif",
    },
    h6: {
      fontWeight: 700,
      fontSize: "18px",
      color: Colors.black,
      textTransform: "uppercase",
      lineHeight: "24px",
      letterSpacing: "1.3px",
      fontFamily: "'Manrope', sans-serif",
    },
    overline: {
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "10px",
      color: Colors.peach,
      fontFamily: "'Manrope', sans-serif",
    },
    subtitle: {
      fontWeight: 700,
      fontSize: "13px",
      lineHeight: "25px",
      letterSpacing: "1px",
      color: Colors.peach,
      fontFamily: "'Manrope', sans-serif",
    },
    body: {
      fontWeight: 550,
      fontSize: "15px",
      lineHeight: "25px",
      color: Colors.greyDark,
      fontFamily: "'Manrope', sans-serif",
    },
  },
});

export default theme;
