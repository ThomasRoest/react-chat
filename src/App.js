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

const App = () => {
  return (
    <div className="App">
      <MainHeader />
      <MainContainer />
    </div>
  );
};

export default App;
