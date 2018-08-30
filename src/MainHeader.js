//@flow

import React from "react";
import styled from "styled-components";
import search from "./images/search.svg";

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
`;

const HeaderTop = styled.div`
  background-color: #075e54;
  height: 5px;
  display: flex;
  height: 60px;
  align-items: center;
  div h1 {
    color: white;
    font-weight: 500;
    font-size: 1.3em;
    padding-left: 15px;
  }
  div:nth-child(1) {
    flex-basis: 90%;
  }
  div:nth-child(2) {
    flex-basis: 10%;
  }
  div img {
    height: 20px;
    margin: 0;
    padding: 0;
  }
`;

const SettingsIcon = styled.div`
  flex-basis: 10%;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  span {
    align-self: flex-end;
    width: 5px;
    height: 5px;
    margin: 2px;
    background: #fff;
    border-radius: 50%;
    display: block;
  }
`;

const HeaderNav = styled.nav`
  background-color: #075e54;
  font-size: 0.8em;
  font-weight: 500;
  height: 45px;
  display: flex;
  letter-spacing: 0.7px;
  justify-content: space-between;
  color: white;
  text-transform: uppercase;
  margin: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  a {
    flex-grow: 1;
    text-align: center;
    padding-top: 12px;
    transition: background-color 0.4s;
  }
  a:active {
    background-color: lightgray;
    transition: background-color 0.4s;
    border-bottom: 3px solid white;
  }
`;

const MainHeaderTop = () => {
  return (
    <HeaderTop>
      <div>
        <h1>Whaddup</h1>
      </div>
      <div>
        <img src={search} alt="search" />
      </div>
      <SettingsIcon>
        <span />
        <span />
        <span />
      </SettingsIcon>
    </HeaderTop>
  );
};

const MainHeaderNav = () => {
  return (
    <HeaderNav>
      <a>Ic</a>
      <a>Chats</a>
      <a>Status</a>
      <a>Oproepen</a>
    </HeaderNav>
  );
};

const MainHeader = () => {
  return (
    <Header>
      <MainHeaderTop />
      <MainHeaderNav />
    </Header>
  );
};

export default MainHeader;
