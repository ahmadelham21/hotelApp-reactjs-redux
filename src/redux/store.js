import { configureStore } from '@reduxjs/toolkit';
import hotelsReducer from './slices/hotelSlice';
import bookingsReducer from './slices/bookingSlice';
import authReducer from './slices/authSlice';


const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    bookings: bookingsReducer,
    auth: authReducer
  }
});

export default store;