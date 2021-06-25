import { drinkAction } from "./drinkSlice";

export const getDrinksDataFromAPI = () => {
  return async (dispatch) => {
    const getDrinksData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass`
      );
      const drinkData = await response.json();

      dispatch(drinkAction.getDrinksData(drinkData.drinks));
    };
    getDrinksData();
  };
};

export const getDrinksDataById = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const drinkData = await response.json();

    dispatch(drinkAction.getSingleDrinkData(drinkData.drinks));
  };
};

export const getDrinksDataBySearch = (searchText) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    );
    const drinkData = await response.json();

    dispatch(drinkAction.getDrinksData(drinkData.drinks));
  };
};
