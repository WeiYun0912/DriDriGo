import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./alertSlice";
import drinkSlice from "./drinkSlice";

const store = configureStore({
  reducer: {
    drinks: drinkSlice,
    alerts: alertSlice,
  },
});

export default store;
