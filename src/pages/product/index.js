// Routing
import { useParams } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Components
import ProductBannerControl from "./containers/ProductBannerControl";

// Utils
import { Colors } from "../../common/utils/constants";

// Images
import headphoneImage from "../../images/product3.png";

const Product = () => {
  const { productId } = useParams();
  return (
    <Stack width={"80%"} alignSelf={"center"} spacing={5}>
      <Typography
        component={"a"}
        href="#"
        onClick={() => window.history.back()}
        variant="body"
        sx={{ color: Colors.black, textDecoration: "none" }}
      >
        Back
      </Typography>
      <ProductBannerControl
        title="Lenny's phones"
        image={headphoneImage}
        description={
          "Come check this awesome thing out, you will get your mind blown ksnakfnaskdnasd"
        }
        isNew={true}
        price={1200}
      />
    </Stack>
  );
};

export default Product;
