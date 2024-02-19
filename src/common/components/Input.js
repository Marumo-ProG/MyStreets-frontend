// components
import TextField from "@mui/material/TextField";

// utils
import { Colors } from "../../utils/constants";

const Input = ({ error, label = "", value = "", ...rest }) => {
  return (
    <TextField
      helperText={error ? error.message : ""}
      label={label}
      value={value}
      sx={{
        fontSize: 14,
        borderRadius: "8px",
        height: 56,
        ".MuiFormLabel-root": {
          fontSize: 14,
          color: Colors.black,
        },

        ".MuiInputBase-root": {
          fontSize: 14,
        },
      }}
      {...rest}
    ></TextField>
  );
};

export default Input;
