//@flow

import React from "react";
import styled from "styled-components";
import ChatList from "./ChatList";
import MainCarousel from "./MainCarousel";

const Main = styled.main`
  background: lightgray;
  height: 100vh;
  margin-top: 105px;
`;

const MainContainer = () => {
  return (
    <Main>
      {/* <ChatList /> */}
      <MainCarousel />
    </Main>
  );
};

export default MainContainer;
