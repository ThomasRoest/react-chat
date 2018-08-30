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
    flex-basis: 60%;
  }
  div:nth-child(2),
  div:nth-child(3) {
    flex-basis: 20%;
  }
  div img {
    height: 20px;
    margin: 0;
    padding: 0;
  }
`;

const HeaderNav = styled.nav`
  background-color: #075e54;
  font-size: 0.8em;
  font-weight: 500;
  height: 45px;
  display: flex;
  justify-content: space-between;
  color: white;
  text-transform: uppercase;
  margin: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  a {
    flex-grow: 1;
    text-align: center;
    padding-top: 12px;
  }
  a:active {
    background-color: lightgray;
  }
`;

const MainHeaderTop = () => {
  return (
    <HeaderTop>
      <div>
        <h1>Whaddup</h1>
      </div>
      <div>
        <img src={search} alt="logo" />
      </div>
      <div>settings</div>
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
