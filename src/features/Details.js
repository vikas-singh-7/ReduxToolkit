import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "zara",
    age: 22,
  },
  { name: "cinnamon", age: 23 },
];

const DetailSlice = createSlice({
  initialState,
  name: "Details",
  reducers: {
    EditDetails: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { EditDetails } = DetailSlice.actions;

export const Details = DetailSlice.reducer;
export default DetailSlice;

// make a slice
// make initial sttae , name , reducers
// export the reducer function with actions which is being used by components which will dispatch or use state

// export slice.reducer (combined reducer for the store )
