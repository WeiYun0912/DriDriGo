import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  getDrinksDataBySearch,
  getDrinksDataFromAPI,
} from "../store/drinkActions";

import DrinksCommon from "./common/DrinksCommon";

const Drinks = () => {
  const dispatch = useDispatch();
  const searchRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("s");
  useEffect(() => {
    let isSearching = false;
    const searchDrinks = () => {
      if (search !== null) {
        console.log("render");
        isSearching = true;
        dispatch(getDrinksDataBySearch(search));
      }
    };

    searchDrinks();
    return () => {
      if (isSearching) {
        dispatch(getDrinksDataFromAPI());
      }
    };
  }, [search, dispatch]);

  const drinks = useSelector((state) => state.drinks.drinks);

  const searchDrinks = () => {
    const searchText = searchRef.current.value;
    console.log(searchText);
    navigate(`${location.pathname}?s=${searchText}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ x: "-100%", transition: { duration: 0.5 } }}
    >
      <SearchWrapper>
        <input type="text" placeholder="Search Drink...." ref={searchRef} />
        <select>
          <option value="Cocktail">Cocktail</option>
          <option value="Cocoa">Cocoa</option>
          <option value="Shot">Shot</option>
          <option value="Beer">Beer</option>
        </select>
        <button onClick={searchDrinks}>Search</button>
      </SearchWrapper>
      <motion.div>
        <DrinksCommon drinks={drinks} />
      </motion.div>
    </motion.div>
  );
};

export default Drinks;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  input {
    font-size: 20px;
    position: relative;
    display: inline-block;
  }

  input[type="text"] {
    background: #fff;
    width: 340px;
    height: 50px;
    border: none;
    outline: none;
    padding: 0 25px;
  }

  button{
    font-size :20px;
      position : relative;
      width : 150px;
      height : 50px;
      outline : none;
      border : none;
      cursor : pointer;
      background : #EF4056;
      color : #fff;
      left -5px;
  }

  select {
    position: relative;
    border: none;
    outline: none;
    background: #fff;
    font-size: 18px;
    padding: 11px 16px 12px;

    left: -3px;
    border-right: 15px solid #fff;
  }
`;
