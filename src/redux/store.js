import { configureStore } from '@reduxjs/toolkit';
import hotelsReducer from './slices/hotelSlice';
import bookingsReducer from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    bookings: bookingsReducer
  }
});

export default store;