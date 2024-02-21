// Routing
import { useParams } from "react-router-dom";

// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Product = () => {
  const { productId } = useParams();
  return <Stack spacing={5}></Stack>;
};

export default Product;
