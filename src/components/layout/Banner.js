import React from "react";
import { Animated } from "react-animated-css";
import styled from "styled-components";

const Banner = () => {
  return (
    <Wrapper>
      <ActionWrapper>
        <Animated animationIn="bounceInLeft">
          <MainActionText>DriDriGo Your Drink Choice</MainActionText>
        </Animated>
        <Animated animationIn="bounceInRight">
          <SecActionText>Pick Your Favorite Drink</SecActionText>
        </Animated>
        <Animated animationIn="fadeIn" animationInDelay={300}>
          <ActionButton>See All Drinks</ActionButton>
        </Animated>
      </ActionWrapper>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(https://images.unsplash.com/photo-1565423529726-201d2924dde4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRyaW5rfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=60);
  height: 60vh;
  min-width: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  overflow: hidden;
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 55vh;
`;

const MainActionText = styled.h1`
  font-size: 3.2em;
  margin: 15px 0;
`;
const SecActionText = styled.h2`
  font-size: 3em;
  margin: 15px 0;
`;

const ActionButton = styled.button`
  margin: 15px 0;

  background-color: #ffc845;
  border: none;
  padding: 15px 30px;
  font-size: 1.6em;
  border-radius: 5px;
  font-weight: bold;
  color: #222831;
  box-shadow: -2px 13px 44px -7px rgba(0, 0, 0, 0.79);
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
`;
