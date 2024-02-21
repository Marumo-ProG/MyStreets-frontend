// MUI
import Stack from "@mui/material/Stack";

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
  return (
    <Stack spacing={5}>
      <Banner
        title={"New Product"}
        backgroundColor={Colors.light_black}
        subtitle={"XX99 Mark II Headphones"}
        description={
          "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        }
        link="#"
        image={Banner1}
      />
      <Stack width={"80%"} alignSelf={"center"}>
        <OverviewProductList />

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
