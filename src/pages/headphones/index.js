// MUI
import Stack from "@mui/material/Stack";

// components
import PageTitleMiniBanner from "../components/PageTitleMiniBanner";
import ProductBlock from "../components/ProductBlock";

// Images
import headphoneImage from "../../images/product1.png";

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
    </Stack>
  );
};

export default Headphones;
