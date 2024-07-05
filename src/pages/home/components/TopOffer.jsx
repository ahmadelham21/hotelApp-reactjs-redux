import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HotelList from "./HotelList";
const TopOffer = () => {
  return (
    <>
      <Container maxWidth="xl mt-4">
        <Typography sx={{ mb: 4 }} variant="h2" color="initial">
          Top Offers
        </Typography>
        <HotelList />
      </Container>
    </>
  );
};

export default TopOffer;
