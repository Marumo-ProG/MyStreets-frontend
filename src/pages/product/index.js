// Routing
import { useParams } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Components
import ProductBannerControl from "./containers/ProductBannerControl";
import Features from "./containers/Feature";
import Gallaries from "./containers/Gallaries";
import YouMayLike from "./containers/YouMayLike";

// Utils
import { Colors } from "../../common/utils/constants";

// Images
import headphoneImage from "../../images/product3.png";
import productsImage1 from "../../images/product2.png";

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

      <Features
        features={
          "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."
        }
        extras={["2 bags", "40 day warantee"]}
      />

      <Gallaries images={[headphoneImage, productsImage1]} />

      <YouMayLike
        products={[
          { title: "head Jacks", link: "/products/35", image: headphoneImage },
          {
            title: "Jane Phone Jacks",
            link: "/products/70",
            image: productsImage1,
          },
        ]}
      />
    </Stack>
  );
};

export default Product;
