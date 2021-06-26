import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  alerts: [],
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert(state, action) {
      const alert = {
        id: action.payload.id,
        type: action.payload.type,
        message: action.payload.message,
        visible: true,
      };
      state.alerts.push(alert);
    },
    changeVisible(state, action) {
      const n = state.alerts.findIndex((alert) => alert.id === action.payload);
      state.alerts[n].visible = false;
    },
    removeAlert(state, action) {
      state.alerts = state.alerts.filter(
        (alert) => alert.id !== action.payload
      );
    },
  },
});

export const alertAction = alertSlice.actions;

export default alertSlice.reducer;
