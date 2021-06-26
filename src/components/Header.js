import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DrinkLogo from "../assets/drink.png";
import avatar from "../assets/avatar.svg";
const Header = () => {
  return (
    <NavBar>
      <Title>
        <Logo src={DrinkLogo} />
        <TitleName>DriDriGo</TitleName>
      </Title>
      <NavRoute>
        <NavLink activeClassName="active" to="/" exact>
          Home
        </NavLink>

        <NavLink activeClassName="active" to="/drinks">
          Drinks
        </NavLink>
        <NavLink activeClassName="active" to="/myfavorite">
          MyFavor
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <img src={avatar} alt="" />
      </NavRoute>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.div`
  min-height: 80px;
  background-color: #222831;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.img`
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

const TitleName = styled.h2`
  margin-left: 8px;
`;

const NavRoute = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  justify-content: flex-end;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    letter-spacing: 2px;
  }

  a.active {
    text-decoration: underline;
  }
  img {
    width: 40px;
    margin-right: 10px;
  }
`;
