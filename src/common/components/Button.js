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
      sx={{ fontSize: 13, padding: 1.5, borderRadius: 0, width: 160 }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
