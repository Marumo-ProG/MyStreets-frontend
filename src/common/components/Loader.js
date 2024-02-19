// MUI
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Stack
      sx={{ width: "100%", height: "100%" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress color="primary" />
    </Stack>
  );
};

export default Loader;
