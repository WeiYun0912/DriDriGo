import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getDrinksDataById } from "../store/drinkActions";
import { Animated } from "react-animated-css";
import { drinkAction } from "../store/drinkSlice";

const extractIngredients = (object) => {
  let objectKeys = [];
  if (object.length >= 1) {
    Object.keys(object[0]).forEach((objKey) => {
      if (objKey.includes("Ingredient")) {
        if (object[0][objKey] !== null) {
          objectKeys.push(object[0][objKey]);
        }
      }
    });
  }
  return objectKeys;
};

const Drink = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const drink = useSelector((state) => state.drinks.drink);

  useEffect(() => {
    dispatch(getDrinksDataById(id));
    return () => {
      dispatch(drinkAction.clearSingleDrinkData());
    };
  }, [id, dispatch]);

  const drinkIngredients = extractIngredients(drink);

  let drinkDetail;
  let drinkIngredient;
  if (drinkIngredients.length >= 1) {
    drinkIngredient = (
      <ul>
        {drinkIngredients.map((ingredient, id) => (
          <li key={id}>{ingredient}</li>
        ))}
      </ul>
    );
  }
  if (drink && drink.length >= 1) {
    const {
      strDrink,
      strInstructions,
      strDrinkThumb,
      strCategory,
      strAlcoholic,
      strGlass,
    } = drink[0];
    drinkDetail = (
      <>
        <Animated
          animationIn="slideInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <DrinkImageWrapper>
            <img src={strDrinkThumb} alt="" width="600" />
          </DrinkImageWrapper>
        </Animated>
        <DrinkDetailWrapper>
          <Animated animationIn="fadeIn">
            <DrinkName>{strDrink}</DrinkName>
          </Animated>
          <Animated animationIn="fadeIn" animationInDuration={3000}>
            <DrinkDetailText>
              <p>{strInstructions}</p>
              <p style={{ fontWeight: "bold" }}>Integrdients :</p>
              {drinkIngredient}
              <DrinkCategory>
                <span>{strCategory}</span>
                <span>{strAlcoholic}</span>
                <span>{strGlass}</span>
              </DrinkCategory>
            </DrinkDetailText>
          </Animated>
        </DrinkDetailWrapper>
      </>
    );
  } else {
    drinkDetail = <p>Loading..</p>;
  }

  return (
    <Container>
      <DrinkWrapper>{drinkDetail}</DrinkWrapper>
    </Container>
  );
};

export default Drink;
const Container = styled.div`
  width: 80%;
  color: #fff;
`;
const DrinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 7rem;
  padding-right: 7rem;
  padding-top: 2.5rem;
  padding-bottom: 7rem;
  max-width: 100rem;
`;

const DrinkImageWrapper = styled.div`
  //   width: 100%;
  height: 50vw;
  max-height: 70rem;
  border: 1px solid #f7797d;
  box-shadow: #f7797d 1.5rem 1.5rem 0 0;
  border-radius: 2rem;
  // width: 50%;
  padding: 3rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const DrinkDetailWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 7rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 1.5em;
  }
`;

const DrinkName = styled.div`
  font-size: 4.8em;
`;

const DrinkDetailText = styled.div`
  width: 100%;
  li {
    font-size: 1.5em;
  }

  span {
    border-radius: 5px;
    width: 200px;
    font-size: 1.2em;
    padding: 0.5em 0;
    text-align: center;
    margin: 0 3px;
    font-weight: bold;
    transition: 0.2s all ease-in;
    cursor: pointer;
  }
  span:nth-of-type(1) {
    background: linear-gradient(to bottom, #ffe259, #ffa751);
    &:hover {
      box-shadow: -2px 10px 50px -5px #ffe259;
    }
  }

  span:nth-of-type(2) {
    background: linear-gradient(to bottom, #ffe000, #799f0c);
    &:hover {
      box-shadow: -2px 10px 50px -5px #ffe000;
    }
  }
  span:nth-of-type(3) {
    background: linear-gradient(to bottom, #5433ff, #20bdff, #a5fecb);
    &:hover {
      box-shadow: -2px 10px 50px -5px #20bdff;
    }
  }
`;

const DrinkCategory = styled.div`
  width: 100%;
  display: flex;

  // flex-wrap: wrap;
`;
