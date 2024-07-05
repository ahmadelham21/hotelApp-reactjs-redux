import { Divider } from "@mui/material";

const CardDivider = () => {
  return (
    <Divider
      orientation="vertical"
      flexItem
      sx={{ m: 2, borderWidth: 1, borderColor: "black" }}
    />
  );
};

export default CardDivider;
