//@flow

import React from "react";
import styled from "styled-components";
import ChatList from "./ChatList";

const Main = styled.main`
  background: lightgray;
  height: 100vh;
  margin-top: 105px;
`;

const MainContainer = () => {
  return (
    <Main>
      <ChatList />
    </Main>
  );
};

export default MainContainer;
