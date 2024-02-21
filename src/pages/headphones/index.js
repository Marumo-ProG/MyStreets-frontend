// MUI
import Stack from "@mui/material/Stack";

// components
import PageTitleMiniBanner from "../components/PageTitleMiniBanner";
import ProductBlock from "../components/ProductBlock";
import OverviewProductList from "../overview/containers/OverviewProductList";
import TestimonialBanner from "../overview/containers/TestimonialBanner";

// Images
import headphoneImage from "../../images/product1.png";
import TestimonyImage from "../../images/productTestimony.png";

const Headphones = () => {
  return (
    <Stack spacing={5}>
      <PageTitleMiniBanner title={"Headphones"} />
      <ProductBlock
        title="Lenny's phones"
        image={headphoneImage}
        isInverted={true}
        description={
          "Come check this awesome thing out, you will get your mind blown ksnakfnaskdnasd"
        }
        isNew={true}
        link="products/23"
      />
      <ProductBlock
        title="Lenny's phones"
        image={headphoneImage}
        isInverted={false}
        description={
          "Come check this awesome thing out, you will get your mind blown ksnakfnaskdnasd"
        }
        isNew={true}
        link="products/23"
      />
      <ProductBlock
        title="Lenny's phones"
        image={headphoneImage}
        isInverted={true}
        description={
          "Come check this awesome thing out, you will get your mind blown ksnakfnaskdnasd"
        }
        isNew={true}
        link="products/23"
      />
      <Stack marginTop={"180px"}>
        <OverviewProductList />
      </Stack>

      <TestimonialBanner
        title="Bringing you the best audio gear"
        image={TestimonyImage}
        description={
          "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
        }
      />
    </Stack>
  );
};

export default Headphones;
