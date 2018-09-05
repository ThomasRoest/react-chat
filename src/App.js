//@flow

import React from "react";
import MainHeader from "./MainHeader";
import MainContainer from "./MainContainer";
import { injectGlobal } from "styled-components";

injectGlobal`
   *, *:before, *:after {
    box-sizing: border-box;
  }
   body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
   }
`;

type State = {
  viewState: string
};

class App extends React.Component<null, State> {
  state = {
    viewState: "1"
  };

  changeViewState = event => {
    this.setState({ viewState: event.target.dataset.nav });
  };

  render() {
    return (
      <div className="App">
        <MainHeader changeViewState={this.changeViewState} />
        <MainContainer viewState={this.state.viewState} />
      </div>
    );
  }
}

export default App;
