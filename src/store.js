import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import favoritesReducer from "./features/favoritesSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
  },
});
