// navigation
import { useNavigate } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

// Components
import Button from "../../../common/components/Button";

// Utils
import { Colors } from "../../../common/utils/constants";

const Banner = ({
  backgroundColor = "white",
  title,
  subtitle,
  description,
  link,
  image,
}) => {
  const navigate = useNavigate();
  return (
    <Stack
      width={"100%"}
      height="calc(100vh - 93px)"
      maxHeight={"calc(100vh - 93px)"}
      sx={{ backgroundColor: backgroundColor }}
    >
      <Stack
        direction={"row"}
        width={"80%"}
        alignSelf={"center"}
        alignItems={"center"}
        flex={1}
      >
        <Stack width={"100%"} spacing={3}>
          <Typography variant={"overline"} sx={{ color: Colors.med_grey }}>
            {title}
          </Typography>
          <Typography variant={"h1"} sx={{ color: Colors.white }}>
            {subtitle}
          </Typography>
          <Typography variant={"body"} sx={{ color: Colors.med_grey }}>
            {description}
          </Typography>

          <Stack width={"160px"}>
            <Button onClick={() => navigate(link)} variant={"contained"}>
              {" "}
              View Product
            </Button>
          </Stack>
        </Stack>
        <Stack width={"100%"} spacing={3} overflow={"hidden"}>
          <CardMedia
            component="img"
            src={image}
            alt={"mystreet product"}
            sx={{ height: "calc(100vh - 93px)", width: "100%", objectFit: "contain" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Banner;
