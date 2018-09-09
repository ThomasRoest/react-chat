//@flow

import React from "react";
import styled from "styled-components";
import ChatList from "./ChatList";
import MainCarousel from "./MainCarousel";

const Main = styled.main`
  background: lightgray;
  padding-top: 105px;
`;

type Props = {
  viewState: string
};

const MainContainer = ({ viewState }: Props) => {
  return (
    <Main>
      <MainCarousel viewState={viewState} />
    </Main>
  );
};

export default MainContainer;
