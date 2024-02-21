// MUI
import Stack from "@mui/material/Stack";

// components
import PageTitleMiniBanner from "../components/PageTitleMiniBanner";
import ProductBlock from "../components/ProductBlock";
import OverviewProductList from "../overview/containers/OverviewProductList";
import TestimonialBanner from "../overview/containers/TestimonialBanner";

// Images
import headphoneImage from "../../images/product1.png";

const Headphones = () => {
  return (
    <Stack width={"100%"} spacing={5}>
      <PageTitleMiniBanner title={"Headphones"} />
      <Stack alignSelf={"center"} width={"80%"} spacing={5}>
        <ProductBlock
          title="Lenny's phones"
          image={headphoneImage}
          isInverted={true}
          description={
            "Come check this awesome thing out, you will get your mind blown ksnakfnaskdnasd"
          }
          isNew={true}
          link="/products/23"
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

        <TestimonialBanner />
      </Stack>
    </Stack>
  );
};

export default Headphones;
