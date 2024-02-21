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

const MainMenu = ({ isFooter = false }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignSelf={"center"}
        width={!isFooter ? "100%" : "80%"}
        paddingLeft={!isFooter && "10%"}
        paddingRight={!isFooter && "10%"}
        boxSizing={"border-box"}
        height={92}
        alignItems={"center"}
        sx={{
          borderBottom: !isFooter && `0.8px ${Colors.light_grey} solid`,
          display: { xs: "none", md: "flex" },
          position: !isFooter && "absolute",
          backgroundColor: Colors.black,
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

        {!isFooter && (
          <IconButton>
            <ShoppingCartOutlinedIcon
              sx={{ color: Colors.white, height: 20, width: 23 }}
            />
          </IconButton>
        )}
      </Stack>
    </>
  );
};
export default MainMenu;
