import { alertAction } from "./alertSlice";
import { v4 as uuid } from "uuid";
export const setAlerts = (type, message) => {
  return (dispatch) => {
    const id = uuid();
    console.log(id);
    dispatch(alertAction.setAlert({ id, type, message }));

    setTimeout(() => {
      dispatch(alertAction.changeVisible(id));
      setTimeout(() => {
        dispatch(alertAction.removeAlert(id));
      }, 1000);
    }, 3000);
  };
};
