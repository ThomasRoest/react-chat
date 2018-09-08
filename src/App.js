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

// const GlobalStyle = createGlobalStyle`
//   html {
//     color: red;
//   }
// `;

type State = {
  viewState: string
};

class App extends React.Component<null, State> {
  state = {
    viewState: "2"
  };

  changeViewState = event => {
    const newState = event.target.dataset.nav;
    // console.log(event.target.dataset);
    this.setState({ viewState: newState });
  };

  render() {
    return (
      <div className="App">
        <MainHeader
          changeViewState={this.changeViewState}
          viewState={this.state.viewState}
        />
        <MainContainer viewState={this.state.viewState} />
      </div>
    );
  }
}

export default App;
