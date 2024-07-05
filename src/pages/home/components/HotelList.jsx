import { Grid, Box } from "@mui/material";
import HotelCard from "./HotelCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// const items = [
//   { id: 1, title: "Item 1", description: "This is item 1" },
//   { id: 2, title: "Item 2", description: "This is item 2" },
//   { id: 3, title: "Item 3", description: "This is item 3" },
//   { id: 4, title: "Item 4", description: "This is item 4" },
//   { id: 5, title: "Item 5", description: "This is item 5" },
//   { id: 6, title: "Item 6", description: "This is item 6" },
//   { id: 7, title: "Item 7", description: "This is item 7" },
//   { id: 8, title: "Item 8", description: "This is item 8" },
//   // Tambahkan lebih banyak item jika diperlukan
// ];

const HotelList = () => {


    const hotels = useSelector(state => state.hotels.hotels);
    const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {hotels.map((hotel) => (
          <Grid item xs={12} sm={6} md={3} key={hotel.id}>
            <HotelCard item={hotel} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HotelList;
