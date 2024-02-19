// router
import { Outlet } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";

// Components
import MainMenu from "./containers/MainMenu";
import MainFooter from "./containers/MainFooter";

const MainLayout = () => {
  return (
    <Stack justifyContent={"space-between"} sx={{ position: "relative" }}>
      <MainMenu />
      <Outlet />
      <MainFooter />
    </Stack>
  );
};

export default MainLayout;
