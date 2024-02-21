// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

// Utils
import { Colors } from "../../../common/utils/constants";
import TestimonyImage from "../../../images/productTestimony.png";

const TestimonialBanner = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      width={"100%"}
      height={588}
      mb={5}
      alignSelf={"center"}
      boxSizing={"border-box"}
    >
      <Stack
        justifyContent={"center"}
        width={"100%"}
        spacing={4}
        height={"100%"}
      >
        <Typography variant={"h2"}>
          Bringing you the{" "}
          <Box component={"span"} sx={{ color: Colors.peach }}>
            best
          </Box>{" "}
          audio gear
        </Typography>
        <Typography variant={"body"}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </Stack>
      <Stack
        width={"100%"}
        height={"100%"}
        sx={{ overflow: "hidden", borderRadius: "8px" }}
      >
        <CardMedia
          component="img"
          src={TestimonyImage}
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
