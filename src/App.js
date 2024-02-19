import { ThemeProvider } from "@mui/material/styles";
import theme from "./common/utils/theme";

// Router
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import Typography from "@mui/material/Typography";
import Button from "./common/components/Button";
import Input from "./common/components/Input";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
