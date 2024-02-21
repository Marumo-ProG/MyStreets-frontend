// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Utils
import { Colors } from "../../../common/utils/constants";

const Features = ({ features, extras }) => {
  return (
    <Stack direction={"row"} spacing={5}>
      <Stack width={"150%"} spacing={3} sx={{ maxWidth: "635px" }} padding={5}>
        <Typography variant="h3">Features</Typography>
        <Typography variant={"body"}>{features}</Typography>
      </Stack>
      <Stack spacing={3} padding={5}>
        <Typography variant="h3">Extras</Typography>

        <Stack spacing={2}>
          {extras.map((extra, index) => {
            return <Typography variant={"body"}>{extra}</Typography>;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Features;
