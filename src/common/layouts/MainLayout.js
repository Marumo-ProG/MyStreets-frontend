// router
import { Outlet } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";

// Components
import MainMenu from "./containers/MainMenu";

const MainLayout = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      sx={{ backgroundColor: "black", height: "100vh" }}
    >
      <MainMenu />
    </Stack>
  );
};

export default MainLayout;
