// Navigation
import { useNavigate } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

// Components
import Button from "../../../common/components/Button";

// Utils
import { Colors } from "../../../common/utils/constants";

const YouMayLike = ({ products }) => {
  const navigate = useNavigate();
  return (
    <Stack spacing={3}>
      <Typography variant={"h3"} sx={{ fontSize: 32, textAlign: "center" }}>
        You May Also Like
      </Typography>

      <Stack direction="row" spacing={2} justifyContent={"center"}>
        {products.map((product, index) => (
          <Stack alignItems={"center"} spacing={2}>
            <Stack
              key={index}
              width={350}
              height={318}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ backgroundColor: Colors.light_grey, borderRadius: "8px" }}
            >
              <CardMedia
                component={"img"}
                src={product.image}
                alt={"MyStreets product image"}
                sx={{ width: 200, height: 200, objectFit: "contain" }}
              />
            </Stack>
            <Typography variant="h6">{product.title}</Typography>
            <Button
              onClick={() => navigate(product.link)}
              variant={"contained"}
            >
              See product
            </Button>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default YouMayLike;
