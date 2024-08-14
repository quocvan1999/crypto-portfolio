import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinFavorites: [],
};

const coinFavorites = createSlice({
  name: "coinFavorites",
  initialState,
  reducers: {
    addFavoriteAction: (state, action) => {
      if (
        state.coinFavorites.some((coin) => coin.id === action.payload.id) ===
        false
      ) {
        state.coinFavorites.push(action.payload);
      }
    },
    removeFavoriteAction: (state, action) => {
      const index = state.coinFavorites.findIndex(
        (favorite) => favorite.id === action.payload
      );
      if (index !== -1) {
        state.coinFavorites.splice(index, 1);
      }
    },
  },
});

export const { addFavoriteAction, removeFavoriteAction } =
  coinFavorites.actions;

export default coinFavorites.reducer;
