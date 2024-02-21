// MUI
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// Utils
import { Colors } from "../utils/constants";

// Icons
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const QuantityControl = ({ quantity }) => {
  return (
    <Stack
      width={120}
      height={48}
      spacing={2}
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ backgroundColor: Colors.light_grey }}
    >
      <IconButton>
        <RemoveRoundedIcon
          sx={{ width: 16, height: 18, color: Colors.dark_brown }}
        />
      </IconButton>
      <Typography variant="body">{quantity}</Typography>
      <IconButton>
        <AddRoundedIcon
          sx={{ width: 16, height: 18, color: Colors.dark_brown }}
        />
      </IconButton>
    </Stack>
  );
};

export default QuantityControl;
