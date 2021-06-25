import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinks: [],
  drink: [],
  favoriteDrinks: [],
};

const drinkSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    addFavoriteDrink(state, action) {
      const favorite = {
        idDrink: action.payload.idDrink,
        strDrink: action.payload.strDrink,
        strDrinkThumb: action.payload.strDrinkThumb,
      };
      state.favoriteDrinks.push(favorite);
    },
    getDrinksData(state, aciton) {
      state.drinks = aciton.payload;
    },
    getSingleDrinkData(state, action) {
      state.drink = action.payload;
    },
    clearSingleDrinkData(state) {
      state.drink = [];
    },
  },
});

export const drinkAction = drinkSlice.actions;

export default drinkSlice.reducer;
