// navigation
import { useNavigate } from "react-router-dom";

// MUI
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

// Component
import Button from "../../../common/components/Button";

// Utils
import { Colors } from "../../../common/utils/constants";

// Icons
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const OverviewItem = ({ image, title, link }) => {
  const navigate = useNavigate();
  return (
    <Paper
      elevation={0}
      sx={{
        width: 350,
        height: 204,
        borderRadius: "8px",
        position: "relative",
      }}
    >
      <Stack
        height={"100%"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: Colors.light_grey,
          borderRadius: "8px",
          paddingTop: "40px",
        }}
      >
        <CardMedia
          component={"img"}
          src={image}
          alt={title}
          sx={{
            height: 160,
            width: 123,
            objectFit: "contain",
            alignSelf: "center",
            top: "-80px",
            position: "absolute",
          }}
        />
        <Typography variant="h6">{title}</Typography>
        <Button
          onClick={() => navigate(link)}
          variant="text"
          sx={{ width: "auto", fontSize: 13, color: Colors.light_black }}
          endIcon={<ChevronRightRoundedIcon sx={{ color: Colors.peach }} />}
        >
          shop
        </Button>
      </Stack>
    </Paper>
  );
};

export default OverviewItem;
