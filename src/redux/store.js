import { configureStore } from "@reduxjs/toolkit";

import coinsReducer from "./reducer/coinsReducer";
import coinFavorites from "./reducer/coinFavorites";

export const store = configureStore({
  reducer: {
    coinsReducer: coinsReducer,
    coinFavorites: coinFavorites,
  },
});
