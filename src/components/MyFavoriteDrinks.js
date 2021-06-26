import React from "react";
import { useSelector } from "react-redux";
import DrinksCommon from "./common/DrinksCommon";

const MyFavorite = () => {
  const drinks = useSelector((state) => state.drinks.favoriteDrinks);
  return <DrinksCommon drinks={drinks} />;
};
export default MyFavorite;
