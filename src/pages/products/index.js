import { useState, useEffect } from "react"

// MUI
import Stack from "@mui/material/Stack";

import axios from "axios";

// components
import PageTitleMiniBanner from "../components/PageTitleMiniBanner";
import ProductBlock from "../components/ProductBlock";
import OverviewProductList from "../overview/containers/OverviewProductList";
import TestimonialBanner from "../overview/containers/TestimonialBanner";

// Images
import headphoneImage from "../../images/product1.png";

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3033/api/products/")
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Stack width={"100%"} spacing={5}>
      <PageTitleMiniBanner title={"Headphones"} />
      <Stack alignSelf={"center"} width={"80%"} spacing={5}>
        {products?.map((product, index) => (
          <ProductBlock
            index={index}
            title={product.title}
            image={product.image}
            isInverted={index % 2 === 0}
            description={product.description}
            // isNew={true}
            link={"/products/" + product.id}
          />
        ))}


        <Stack marginTop={"180px"}>
          <OverviewProductList />
        </Stack>

        <TestimonialBanner />
      </Stack>
    </Stack>
  );
};

export default Products;
