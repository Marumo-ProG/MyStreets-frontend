// MUI
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";

const Gallaries = ({ images }) => {
  return (
    <Stack width={"100%"} height={592} direction={"row"} spacing={2}>
      {images?.length === 3 && (
        <>
          <Stack width={"100%"} spacing={2}>
            <CardMedia
              component={"img"}
              alt={"mystreet product image"}
              src={images[0]}
              sx={{
                width: "100%",
                height: 280,
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <CardMedia
              component={"img"}
              alt={"mystreet product image"}
              src={images[1]}
              sx={{
                width: "100%",
                height: 280,
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </Stack>
          <Stack width={"100%"} spacing={2}>
            <CardMedia
              component={"img"}
              alt={"mystreet product image"}
              src={images[2]}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </Stack>
        </>
      )}
      {images?.length === 2 && (
        <>
          <Stack width={"100%"} spacing={2}>
            <CardMedia
              component={"img"}
              alt={"mystreet product image"}
              src={images[0]}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </Stack>
          <Stack width={"100%"} spacing={2}>
            <CardMedia
              component={"img"}
              alt={"mystreet product image"}
              src={images[1]}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </Stack>
        </>
      )}
      {images?.length === 1 && (
        <Stack width={"200%"} spacing={2}>
          <CardMedia
            component={"img"}
            alt={"mystreet product image"}
            src={images[0]}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default Gallaries;
