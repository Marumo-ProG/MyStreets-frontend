// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Utils
import { Colors } from "../../common/utils/constants";

const PageTitleMiniBanner = ({ title }) => {
  return (
    <Stack
      height={"calc(336px - 93px)"}
      sx={{ backgroundColor: Colors.black }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h2" sx={{ color: Colors.white, fontSize: 40 }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default PageTitleMiniBanner;
