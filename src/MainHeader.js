//@flow

import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: #128c7e;
  position: fixed;
  width: 100%;
  top: 0;
`;

const HeaderTop = styled.div`
  background-color: #128c7e;
  height: 5px;
  display: flex;
  height: 45px;
  justify-content: space-between;
`;

const HeaderNav = styled.nav`
  background-color: #128c7e;
  height: 35px;
  display: flex;
  border: 1px solid yellow;
  justify-content: space-around;
  color: white;
  text-transform: uppercase;
  margin: 0;
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
