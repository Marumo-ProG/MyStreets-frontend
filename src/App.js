// React

// Context
import OrderContextPrivider from "./common/context/OrderContext";

// Theme
import { ThemeProvider } from "@mui/material/styles";
import theme from "./common/utils/theme";

// Router
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <OrderContextPrivider>
          <Routes />
        </OrderContextPrivider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
