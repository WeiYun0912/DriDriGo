import { configureStore } from "@reduxjs/toolkit";
import drinkSlice from "./drinkSlice";

const store = configureStore({
  reducer: {
    drinks: drinkSlice,
  },
});

export default store;
