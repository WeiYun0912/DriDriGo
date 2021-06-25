import React from "react";
import { useEffect } from "react";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  getDrinksDataBySearch,
  getDrinksDataFromAPI,
} from "../store/drinkActions";
import { drinkAction } from "../store/drinkSlice";

const extractId = (drinks) => {
  const id = [];
  drinks.map((drink) => {
    id.push(drink.idDrink);
  });
  return id;
};

const Drinks = () => {
  const dispatch = useDispatch();
  const searchRef = useRef();
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const s = searchParams.get("s");
  const favor = useSelector((state) => state.drinks.favoriteDrinks);
  const idArr = extractId(favor);

  useEffect(() => {
    let isSearching = false;
    const search = () => {
      if (s !== null) {
        console.log("render");
        isSearching = true;
        dispatch(getDrinksDataBySearch(s));
        // return;
      }
    };

    search();
    return () => {
      if (isSearching) {
        dispatch(getDrinksDataFromAPI());
      }
    };
  }, [s, dispatch]);

  let drinks = useSelector((state) => state.drinks.drinks);

  const searchDrinks = () => {
    const searchText = searchRef.current.value;

    history.push({
      pathname: location.pathname,
      search: `?s=${searchText}`,
    });
  };

  const addFavoriteHandler = (drink) => {
    dispatch(drinkAction.addFavoriteDrink(drink));
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
      <DrinkWrapper>
        {drinks.map((drink) => (
          <DrinkCard key={drink.idDrink}>
            <Link to={`/drink/${drink.idDrink}`}>
              <DrinkImage imgSrc={drink.strDrinkThumb} />
            </Link>

            <DrinkName>{drink.strDrink}</DrinkName>
            {!idArr.includes(drink.idDrink) ? (
              <DrinkButton
                exist={true}
                onClick={() => addFavoriteHandler(drink)}
              >
                ADD MY FAVOR
              </DrinkButton>
            ) : (
              <DrinkButton
                exist={false}
                onClick={() => addFavoriteHandler(drink)}
              >
                REMOVE MY FAVOR
              </DrinkButton>
            )}
          </DrinkCard>
        ))}
      </DrinkWrapper>
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

const DrinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  min-width: 80%;
  align-items: center;
  margin: 10px auto;
  flex-wrap: wrap;
  gap: 30px;
`;

const DrinkCard = styled.div`
  background: #222222;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
  object-fit: cover;
  box-shadow: -2px 13px 30px -7px rgba(0, 0, 0, 0.79);
  p {
    font-size: 1.4em;
    font-weight: bold;
    text-align: center;
  }
`;

const DrinkImage = styled.div`
  margin: 0 auto;
  background: url(${(props) => props.imgSrc});
  background-size: cover;
  border-radius: 5px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  //   width: 250px;
  height: 250px;
`;

const DrinkName = styled.p`
  width: 250px;
  position: relative;
  top: 30%;
  //   word-break: break-all;
  //   white-space: nowrap;
  //   word-wrap: break-word;
`;

const DrinkButton = styled.button`
  font-size: 1.2em;
  padding: 0.5em 0.8em;
  margin-bottom: 10px;
  background-color: ${(props) => (props.exist ? "#fcb643" : "#ff304f")};
  border: none;
  border-radius: 5px;
  position: relative;
  top: 30%;
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
`;
