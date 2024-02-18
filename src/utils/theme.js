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
      fontSize: "50px",
      color: Colors.black,
      fontFamily: "'Manrope', sans-serif",
    },
    h2: {
      fontWeight: 700,
      fontSize: "40px",
      color: Colors.black,
      fontFamily: "'Manrope', sans-serif",
    },
    h3: {
      fontWeight: 700,
      fontSize: "35px",
      color: Colors.black,
      fontFamily: "'Manrope', sans-serif",
    },
    h4: {
      fontWeight: 700,
      fontSize: "30px",
      color: Colors.black,
      fontFamily: "'Manrope', sans-serif",
    },
    h5: {
      fontWeight: 700,
      fontSize: "20px",
      color: Colors.black,
      fontFamily: "'Manrope', sans-serif",
    },
    h6: {
      fontWeight: 700,
      fontSize: "16px",
      color: Colors.black,
      fontFamily: "'Manrope', sans-serif",
    },
  },
});

export default theme;
