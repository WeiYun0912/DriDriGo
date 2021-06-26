import React from "react";
import { useEffect } from "react";

import { useRef } from "react";
import { Animated } from "react-animated-css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  getDrinksDataBySearch,
  getDrinksDataFromAPI,
} from "../store/drinkActions";

import DrinksCommon from "./common/DrinksCommon";

const Drinks = () => {
  const dispatch = useDispatch();
  const searchRef = useRef();
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("s");
  useEffect(() => {
    let isSearching = false;
    const searchDrinks = () => {
      if (search !== null) {
        console.log("render");
        isSearching = true;
        dispatch(getDrinksDataBySearch(search));
        // return;
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

    history.push({
      pathname: location.pathname,
      search: `?s=${searchText}`,
    });
  };

  return (
    <>
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
      <Animated animationIn="fadeIn">
        <DrinksCommon drinks={drinks} />
      </Animated>
    </>
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
