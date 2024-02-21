// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Utils
import { Colors } from "../../utils/constants";

// components
import MainMenu from "./MainMenu";

// Socials
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const MainFooter = () => {
  return (
    <Stack
      height={365}
      spacing={3}
      marginTop={"180px"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ backgroundColor: Colors.black }}
    >
      <MainMenu isFooter />
      <Stack width={"80%"} direction={"row"}>
        <Stack width="100%">
          <Typography variant="body" sx={{ color: Colors.med_grey }}>
            MyStreets is an all in one stop to fulfill your audio needs. We're a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we’re open 7 days a week.
          </Typography>
        </Stack>
        <Stack
          justifyContent={"flex-end"}
          alignItems={"end"}
          width={"100%"}
          height={"100%"}
          spacing={0}
          direction={"row"}
        >
          <IconButton>
            <FacebookIcon sx={{ fontSize: 24, color: Colors.white }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ fontSize: 24, color: Colors.white }} />
          </IconButton>
          <IconButton>
            <XIcon sx={{ fontSize: 24, color: Colors.white }} />
          </IconButton>
        </Stack>
      </Stack>
      <Typography
        variant={"body"}
        sx={{
          alignSelf: "center",
          textAlign: "start",
          width: "80%",
          color: Colors.med_grey,
        }}
      >
        Copyright 2024. All Rights Reserved
      </Typography>
    </Stack>
  );
};

export default MainFooter;
