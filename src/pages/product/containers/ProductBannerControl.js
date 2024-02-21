// Navigation
import { useNavigate } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Components
import QuantityControl from "../../../common/components/QuantityControl";
import Button from "../../../common/components/Button";

// Utils
import { Colors } from "../../../common/utils/constants";
import { formatPriceToZAR } from "../../../common/utils/utils";

const ProductBannerControl = ({ image, isNew, title, description, price }) => {
  const navigate = useNavigate();
  return (
    <Stack height={560} width={"100%"} alignSelf={"center"} direction={"row"}>
      <Stack width={"100%"} height={"100%"} justifyContent={"center"}>
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
      </Stack>
      <Stack width={"100%"} height={"100%"} justifyContent={"center"}>
        <Stack spacing={3} padding={5}>
          {isNew && <Typography variant="overline">new product</Typography>}
          <Typography variant="h2" sx={{ fontSize: 40 }}>
            {title}
          </Typography>
          <Typography variant={"body"}>{description}</Typography>
          <Typography variant={"h6"} sx={{ fontSize: 18 }}>
            {formatPriceToZAR(price)}
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <QuantityControl quantity={2} />
            <Button
              sx={{ borderRadius: 0, width: "160px", fontSize: 13 }}
              onClick={() => console.log("adding to card")}
              variant="contained"
              color="primary"
            >
              Add To Cart
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductBannerControl;
