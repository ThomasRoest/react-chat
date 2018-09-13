//@flow

import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import MainCarousel from "./MainCarousel";

injectGlobal`
   *, *:before, *:after {
    box-sizing: border-box;
  }
   body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: #fafafa;
   }
`;

const StyledApp = styled.div`
  max-width: 450px;
  margin: 0 auto;
  box-shadow: 0px 0px 50px lightgrey;
`;

type State = {
  viewState: string
};

class App extends React.Component<null, State> {
  state = {
    viewState: "3"
  };

  changeViewState = (event: KeyboardEvent) => {
    const newState = event.target.dataset.nav;
    this.setState({ viewState: newState });
  };

  render() {
    return (
      <StyledApp>
        <HeaderTop />
        <HeaderNav
          viewState={this.state.viewState}
          changeViewState={this.changeViewState}
        />
        <MainCarousel viewState={this.state.viewState} />
      </StyledApp>
    );
  }
}

export default App;
