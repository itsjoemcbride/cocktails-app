import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinks: {},
};

const drinkSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    addDrinks: (state, { payload }) => {
      state.drinks = payload;
    },
  },
});

export const { addDrinks } = drinkSlice.actions;
export const getAllDrinks = (state) => state.drinks.drinks;
export default drinkSlice.reducer;
