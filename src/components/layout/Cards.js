import React from "react";
import { Animated } from "react-animated-css";
import styled from "styled-components";

const Cards = () => {
  return (
    <CardsWrapper>
      <Animated animationIn="fadeIn" animationInDuration={1500}>
        <h1>Popular Drinks</h1>
      </Animated>
      <CardWrapper>
        <Animated animationIn="wobble">
          <Card>
            <img
              src="https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg"
              alt=""
            />
            <p>Long Island Tea</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              tenetur iusto?
            </p>
          </Card>
        </Animated>
        <Animated animationIn="wobble">
          <Card>
            <img
              src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg"
              alt=""
            />
            <p>Old Fashioned</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              tenetur iusto?
            </p>
          </Card>
        </Animated>
        <Animated animationIn="wobble">
          <Card>
            <img
              src="https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg"
              alt=""
            />
            <p>Dry Martini</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              tenetur iusto?
            </p>
          </Card>
        </Animated>
        <Animated animationIn="wobble">
          <Card>
            <img
              src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
              alt=""
            />
            <p>Margarita</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              tenetur iusto?
            </p>
          </Card>
        </Animated>
      </CardWrapper>
    </CardsWrapper>
  );
};

export default Cards;

const CardsWrapper = styled.div`
  width: 80%;
  margin: 10px auto;

  h1 {
    text-align: center;
    color: #fff;
    font-size: 3em;
    letter-spacing: 5px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 300px;
    border-radius: 5px;
  }
`;

const Card = styled.div`
  cursor: pointer;
  background: #fff;
  padding: 0 0 36px 0;
  border-radius: 5px;
  transition: 0.3s all ease-in;
  &:hover {
    box-shadow: -1px 1px 100px -18px #fff;
  }

  p {
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
  }

  p:nth-of-type(2) {
    width: 200px;
    margin: 0 auto;
    // display: none;
    font-weight: normal;
  }
`;
