import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Button,
} from "@mui/material";
import { rupiahConverter } from "../../utils/rupiahConverter";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooking } from "../../redux/slices/bookingSlice";

const Booking = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL
  const hotels = useSelector((state) => state.hotels.hotels);
  const selectedHotel = hotels.find((hotel) => hotel.id === parseInt(id)); // Mencari hotel berdasarkan id

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    // Kirim data booking ke backend atau proses sesuai kebutuhan
    console.log("Booking Data:", bookingData);

    dispatch(addBooking({ ...bookingData, hotelId: id }));
    navigate("/booking-list");
  };

  if (!selectedHotel) {
    return <Typography variant="h4">Hotel not found</Typography>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 600,
          margin: "auto",
          marginTop: 20,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={selectedHotel.picture}
          alt={selectedHotel.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {selectedHotel.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedHotel.description}
          </Typography>
          <form onSubmit={handleSubmitBooking}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={bookingData.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={bookingData.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              name="checkInDate"
              type="date"
              value={bookingData.checkInDate}
              onChange={handleInputChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              name="checkOutDate"
              type="date"
              value={bookingData.checkOutDate}
              onChange={handleInputChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Guests"
              name="guests"
              type="number"
              value={bookingData.guests}
              onChange={handleInputChange}
              InputProps={{ inputProps: { min: 1 } }}
              required
            />

            <Typography gutterBottom variant="h5" component="div">
              {rupiahConverter(selectedHotel.price)}
            </Typography>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Book Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Booking;
