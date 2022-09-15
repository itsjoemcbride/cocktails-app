import { configureStore } from "@reduxjs/toolkit";
import drinksReducer from "./drinks/drinkSlice";

export const store = configureStore({
  reducer: {
    drinks: drinksReducer,
  },
});
