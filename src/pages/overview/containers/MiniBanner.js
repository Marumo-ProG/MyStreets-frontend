// MUI
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Components
import Button from "../../../common/components/Button";

const MiniBanner = ({ backgroundImage, title, link }) => {
  return (
    <Stack
      height={320}
      width={"80%"}
      justifyContent={"center"}
      boxSizing={"border-box"}
      padding={5}
      alignSelf={"center"}
      spacing={2}
      sx={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundOrigin: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Button variant={"outline"} color={"secondary"}>
        See Product
      </Button>
    </Stack>
  );
};

export default MiniBanner;
