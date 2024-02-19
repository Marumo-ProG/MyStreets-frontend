import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";

import Typography from "@mui/material/Typography";
import Button from "./common/components/Button";
import Input from "./common/components/Input";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Input label="Name:" />
      </div>
    </ThemeProvider>
  );
}

export default App;
