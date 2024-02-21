// React
import { useEffect, useState } from "react"

// Routing
import { useParams } from "react-router-dom";

// data fetching 
import axios from "axios";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Components
import ProductBannerControl from "./containers/ProductBannerControl";
import Features from "./containers/Feature";
import Gallaries from "./containers/Gallaries";
import YouMayLike from "./containers/YouMayLike";
import OverviewProductList from "../overview/containers/OverviewProductList";
import TestimonialBanner from "../overview/containers/TestimonialBanner";

// Utils
import { Colors } from "../../common/utils/constants";

// Images
import headphoneImage from "../../images/product3.png";
import productsImage1 from "../../images/product2.png";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get("http://localhost:3033/api/products/" + productId)
      .then((res) => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Stack width={"80%"} alignSelf={"center"} spacing={5} paddingTop={"24px"}>
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
        title={product.title}
        image={product.image}
        description={product.description}
        isNew={true}
        price={product.price}
      />

      <Features
        features={product.feature}
        extras={product.extras}
      />

      <Gallaries images={product.images} />

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

      <Stack mt={"180px"}>
        <OverviewProductList />
      </Stack>
      <TestimonialBanner />
    </Stack>
  );
};

export default Product;
