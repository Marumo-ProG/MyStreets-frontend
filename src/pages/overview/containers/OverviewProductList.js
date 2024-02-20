// MUI
import Stack from "@mui/material/Stack";

// components
import OverviewItem from "../componens/OverviewItem";

// images
import product1 from "../../../images/product1.png";
import product2 from "../../../images/product2.png";
import product3 from "../../../images/product3.png";

const OverviewProductList = () => {
  return (
    <Stack
      width={"80%"}
      height={284}
      direction={"row"}
      paddingY={5}
      spacing={2}
      alignSelf={"center"}
    >
      <OverviewItem title="Headphones" link="#" image={product1} />
      <OverviewItem title="Speakers" link="#" image={product2} />
      <OverviewItem title="Earphones" link="#" image={product3} />
    </Stack>
  );
};

export default OverviewProductList;
