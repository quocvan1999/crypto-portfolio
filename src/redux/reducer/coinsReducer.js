import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
};

const coinsReducer = createSlice({
  name: "coinsReducer",
  initialState,
  reducers: {
    setCoinsAction: (state, action) => {
      state.coins = action.payload;
    },
  },
});

export const { setCoinsAction } = coinsReducer.actions;

export default coinsReducer.reducer;
