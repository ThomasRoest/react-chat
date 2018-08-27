//@flow

import React from "react";
import styled from "styled-components";

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
  div:nth-child(1) {
    flex-basis: 60%;
  }
  div:nth-child(2),
  div:nth-child(3) {
    background-color: yellow;
    flex-basis: 20%;
  }
`;

const HeaderNav = styled.nav`
  background-color: #075e54;
  height: 45px;
  display: flex;
  align-items: center;
  border: 1px solid yellow;
  justify-content: space-around;
  color: white;
  text-transform: uppercase;
  margin: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
`;

const MainHeaderTop = () => {
  return (
    <HeaderTop>
      <div>title</div>
      <div>search</div>
      <div>settings</div>
    </HeaderTop>
  );
};

const MainHeaderNav = () => {
  return (
    <HeaderNav>
      <div>Chats</div>
      <div>Status</div>
      <div>Oproepen</div>
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
