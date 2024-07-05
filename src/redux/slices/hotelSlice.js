import { createSlice } from "@reduxjs/toolkit";
import { hotelsState } from "../state/hotelState";

const initialState = {
  hotels: hotelsState.hotels,
  selectedHotel: hotelsState.selectedHotel,
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    selectHotel: (state, action) => {
      state.selectedHotel = action.payload;
    },
  },
});

export const { selectHotel } = hotelsSlice.actions;
export default hotelsSlice.reducer;
