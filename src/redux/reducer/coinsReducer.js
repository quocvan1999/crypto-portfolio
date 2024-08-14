import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  coinsSearch: [],
};

const coinsReducer = createSlice({
  name: "coinsReducer",
  initialState,
  reducers: {
    setCoinsAction: (state, action) => {
      state.coins = action.payload;
    },
    searchCoinAction: (state, action) => {
      state.coinsSearch = state.coins.filter((coin) =>
        coin.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { setCoinsAction, searchCoinAction } = coinsReducer.actions;

export default coinsReducer.reducer;
