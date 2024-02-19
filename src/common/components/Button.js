// components
import MuiButton from "@mui/material/Button";

const Button = ({ color, isLoading = false, children, ...rest }) => {
  return (
    <MuiButton color={color} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
