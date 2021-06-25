import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyFavorite = () => {
  const drinks = useSelector((state) => state.drinks.favoriteDrinks);
  return (
    <DrinkWrapper>
      {drinks.map((drink) => (
        <DrinkCard key={drink.idDrink}>
          <Link to={`/drink/${drink.idDrink}`}>
            <DrinkImage imgSrc={drink.strDrinkThumb} />
          </Link>
          <DrinkName>{drink.strDrink}</DrinkName>
          <DrinkButton>ADD MY FAVOR</DrinkButton>
        </DrinkCard>
      ))}
    </DrinkWrapper>
  );
};
export default MyFavorite;

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
  background-color: #fcb643;
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
