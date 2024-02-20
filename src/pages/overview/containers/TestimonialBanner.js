// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

// Utils
import { Colors } from "../../../common/utils/constants";

const TestimonialBanner = ({ image, title, description }) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      width={"80%"}
      height={588}
      mb={5}
      alignSelf={"center"}
      boxSizing={"border-box"}
    >
      <Stack
        justifyContent={"center"}
        width={"100%"}
        spacing={2}
        height={"100%"}
      >
        <Typography variant={"h2"}>{title}</Typography>
        <Typography variant={"body"}>{description}</Typography>
      </Stack>
      <Stack
        width={"100%"}
        height={"100%"}
        sx={{ overflow: "hidden", borderRadius: "8px" }}
      >
        <CardMedia
          component="img"
          src={image}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TestimonialBanner;
