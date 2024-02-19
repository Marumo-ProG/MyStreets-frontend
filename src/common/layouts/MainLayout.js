// router
import { Outlet } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";

const MainLayout = () => {
  return (
    <Stack justifyContent={"space-between"}>
      <h2>Hello world</h2>
      <Outlet />
    </Stack>
  );
};

export default MainLayout;
