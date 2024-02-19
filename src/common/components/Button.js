// components
import MuiButton from "@mui/material/Button";

const Button = ({
  color,
  isLoading = false,
  children,
  fullWidth = true,
  ...rest
}) => {
  return (
    <MuiButton
      color={color}
      fullWidth={fullWidth}
      sx={{ fontSize: 13, padding: 1.5 }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
