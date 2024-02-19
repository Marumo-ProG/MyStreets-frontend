// navigation
import { useNavigate } from "react-router-dom";

// MUI
import Typography from "@mui/material/Typography";

// Utils
import { Colors } from "../utils/constants";

const Link = ({ link, isActive = false, label }) => {
  const navigate = useNavigate();
  return (
    <Typography
      onClick={() => navigate(link)}
      variant={"subtitle"}
      sx={{
        textTransform: "uppercase",
        color: isActive ? Colors.peach : Colors.white,
        "&:hover": { color: Colors.peach, cursor: "pointer" },
      }}
    >
      {label}
    </Typography>
  );
};

export default Link;
