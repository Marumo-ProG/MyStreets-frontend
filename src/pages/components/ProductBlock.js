// Navigation
import { useNavigate } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Utils
import { Colors } from "../../common/utils/constants";

const ProductBlock = ({
  image,
  isNew,
  title,
  description,
  link,
  isInverted,
}) => {
  const navigate = useNavigate();
  return (
    <Stack height={560} width={"80%"} alignSelf={"center"} direction={"row"}>
      <Stack width={"100%"} height={"100%"} justifyContent={"center"}>
        {isInverted ? (
          <Stack
            width={"100%"}
            height={"100%"}
            sx={{ borderRadius: "8px", backgroundColor: Colors.light_grey }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CardMedia
              component="img"
              src={image}
              alt={title}
              sx={{ height: 386, width: 350, objectFit: "contain" }}
            />
          </Stack>
        ) : (
          <Stack spacing={3} padding={5}>
            {isNew && <Typography variant="overline">new product</Typography>}
            <Typography variant="h2" sx={{ fontSize: 40 }}>
              {title}
            </Typography>
            <Typography variant={"body"}>{description}</Typography>
            <Button
              onClick={() => navigate(link)}
              variant="contained"
              sx={{ borderRadius: 0, width: "160px", fontSize: 13 }}
            >
              See Product
            </Button>
          </Stack>
        )}
      </Stack>
      <Stack width={"100%"} height={"100%"} justifyContent={"center"}>
        {isInverted ? (
          <Stack spacing={3} padding={5}>
            {isNew && <Typography variant="overline">new product</Typography>}
            <Typography variant="h2" sx={{ fontSize: 40 }}>
              {title}
            </Typography>
            <Typography variant={"body"}>{description}</Typography>
            <Button
              sx={{ borderRadius: 0, width: "160px", fontSize: 13 }}
              onClick={() => navigate(link)}
              variant="contained"
              color="primary"
            >
              See Product
            </Button>
          </Stack>
        ) : (
          <Stack
            width={"100%"}
            height={"100%"}
            sx={{ borderRadius: "8px", backgroundColor: Colors.light_grey }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CardMedia
              component="img"
              src={image}
              alt={title}
              sx={{ height: 386, width: 350, objectFit: "contain" }}
            />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ProductBlock;
