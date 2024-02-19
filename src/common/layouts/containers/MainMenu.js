// MUI
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Components
import Link from "../../components/Link";

// Utils
import { Colors } from "../../utils/constants";

// Icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const MainMenu = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignSelf={"center"}
        width={"80%"}
        height={92}
        alignItems={"center"}
        sx={{
          borderBottom: `0.8px ${Colors.light_grey} solid`,
          display: { xs: "none", md: "flex" },
        }}
      >
        <Typography variant="h6" sx={{ color: Colors.white, fontWeight: 1000 }}>
          myStreets
        </Typography>

        <Stack spacing={2} direction="row">
          <Link label={"Home"} link={"/"} />
          <Link label={"Headphones"} link={"/"} />
          <Link label={"Speakers"} link={"/"} />
          <Link label={"Earphones"} link={"/"} />
          <Link label={"About"} link={"/"} />
        </Stack>

        <IconButton>
          <ShoppingCartOutlinedIcon
            sx={{ color: Colors.white, height: 20, width: 23 }}
          />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        height={92}
        width={"100%"}
        paddingX={2}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Typography variant="h6" sx={{ color: Colors.white, fontWeight: 1000 }}>
          myStreets
        </Typography>

        {/* Mobile menu here */}
      </Stack>
    </>
  );
};
export default MainMenu;
