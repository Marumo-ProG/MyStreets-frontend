// MUI
import Stack from "@mui/material/Stack";

// components
import OverviewItem from "../componens/OverviewItem";

// images
import product1 from "../../../images/sneaker.png";
import product2 from "../../../images/product2.png";
import product3 from "../../../images/Watch.png";

const OverviewProductList = () => {
  return (
    <Stack
      width={"100%"}
      height={284}
      direction={"row"}
      spacing={2}
      marginTop={"180px"}
      alignSelf={"center"}
    >
      <OverviewItem title="Shoes" link="/products" image={product1} />
      <OverviewItem title="Speakers" link="/products" image={product2} />
      <OverviewItem title="Accessories" link="/products" image={product3} />
    </Stack>
  );
};

export default OverviewProductList;
