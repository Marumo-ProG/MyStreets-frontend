// navigation
import { useNavigate } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

// Utils
import { Colors } from "../../../common/utils/constants";

// Components
import Button from "../../../common/components/Button";

const SecondaryBanner = ({
  backgroundColor = Colors.white,
  title,
  description,
  link,
  image,
}) => {
  const navigate = useNavigate();
  return (
    <Stack
      width="80%"
      height={560}
      alignSelf={"center"}
      direction="row"
      spacing={3}
      sx={{ backgroundColor: backgroundColor }}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <CardMedia
          component={"img"}
          src={image}
          alt={title}
          sx={{
            width: 410,
            height: 493,
            objectFit: "contain",
            marginBottom: -2,
          }}
        />
      </Stack>
      <Stack width={"100%"} justifyContent={"center"} spacing={2}>
        <Stack width={349} spacing={2}>
          <Typography variant="h1" sx={{ color: Colors.white }}>
            {title}
          </Typography>
          <Typography variant="body" sx={{ color: Colors.white }}>
            {description}
          </Typography>

          <Button
            onClick={() => navigate(link)}
            variant="outlined"
            color="secondary"
            sx={{ width: "160px", fontSize: 13 }}
          >
            See product
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default SecondaryBanner;
