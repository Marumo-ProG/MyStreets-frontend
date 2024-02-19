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
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignSelf={"center"}
      width={"80%"}
      height={92}
      alignItems={"center"}
      sx={{ borderBottom: `0.8px ${Colors.med_grey} solid` }}
    >
      <Typography variant="h6" sx={{ color: Colors.white, fontWeight: 1000 }}>
        Street Market
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
  );
};
export default MainMenu;
