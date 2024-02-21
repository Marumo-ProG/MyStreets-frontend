import { useState, useEffect } from "react";

// MUI
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import axios from "axios";

// Components
import Banner from "./containers/Banner";
import OverviewProductList from "./containers/OverviewProductList";
import SecondaryBanner from "./containers/SecondaryBanner";
import MiniBanner from "./containers/MiniBanner";
import TestimonialBanner from "./containers/TestimonialBanner";

// Utils
import { Colors } from "../../common/utils/constants";

// images
import Banner1 from "../../images/banner1.png";
import secondaryProduct from "../../images/secondBanner.png";
import ThirdBanner from "../../images/third banner.png";

const Overview = () => {

  const [bannerProduct, setBannerProduct] = useState({})

  useEffect(() => {
    axios.get("http://localhost:3033/api/products/65d5c98e5c67a0b4f7426e0b")
      .then((res) => {
        console.log(res.data)
        setBannerProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Stack spacing={5}>
      <Banner
        title={"New Product"}
        backgroundColor={Colors.light_black}
        subtitle={bannerProduct.title}
        description={bannerProduct.description}
        link="/products/65d5c98e5c67a0b4f7426e0b"
        image={bannerProduct.image}
      />
      <Stack width={"80%"} alignSelf={"center"} spacing={5}>

        <Stack mt={"180px"} width={"auto"} alignSelf={"center"}>
          <OverviewProductList />
        </Stack>

        <SecondaryBanner
          backgroundColor={Colors.peach}
          title={"ZX9 SPEAKER"}
          image={secondaryProduct}
          description={
            "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
          }
          link={"#"}
        />
        <MiniBanner
          backgroundImage={ThirdBanner}
          title={"ZX7 SPEAKER"}
          link="#"
        />

        <TestimonialBanner />
      </Stack>
    </Stack>
  );
};

export default Overview;
