// MUI
import Stack from "@mui/material/Stack";

// Components
import Banner from "./containers/Banner";
import OverviewProductList from "./containers/OverviewProductList";

// Utils
import { Colors } from "../../common/utils/constants";

// images
import Banner1 from "../../images/banner1.png";

const Overview = () => {
  return (
    <Stack spacing={10}>
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

      <OverviewProductList />
    </Stack>
  );
};

export default Overview;
