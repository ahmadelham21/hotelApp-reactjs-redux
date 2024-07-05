import { Grid, Box } from "@mui/material";
import HotelCard from "./HotelCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectHotel } from "../../../redux/slices/hotelSlice";



const HotelList = () => {
  const hotels = useSelector((state) => state.hotels.hotels);
  const dispatch = useDispatch();
  const handleSelectHotel = (hotel) => {
    dispatch(selectHotel(hotel));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {hotels.map((hotel) => (
          <Grid item xs={12} sm={6} md={3} key={hotel.id}>
            <HotelCard item={hotel} onSelectHotel={() => handleSelectHotel(hotel)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HotelList;
