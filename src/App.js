//@flow

import React from "react";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";
import MainCarousel from "./MainCarousel";
import ChatScreen from "./ChatScreen";

injectGlobal`
   *, *:before, *:after {
    box-sizing: border-box;
  }
   body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    background-color: #f1f1f2;
   }
`;

const StyledApp = styled.div`
  max-width: 450px;
  margin: 0 auto;
  position: relative;

  /* box-shadow: 0px 0px 50px lightgrey; */
`;

type State = {
  viewState: string,
  chatScreenPosition: string
};

class App extends React.Component<null, State> {
  state = {
    viewState: "2",
    chatScreenPosition: "0"
  };

  changeViewState = (event: KeyboardEvent) => {
    const newState = event.target.dataset.nav;
    this.setState({ viewState: newState });
  };

  showChatScreen = () => {
    this.setState({ chatScreenPosition: "1" });
  };

  closeChatScreen = () => {
    this.setState({ chatScreenPosition: "0" });
  };

  render() {
    return (
      <StyledApp>
        <HeaderTop />
        <HeaderNav
          viewState={this.state.viewState}
          changeViewState={this.changeViewState}
        />
        <MainCarousel
          showChatScreen={this.showChatScreen}
          viewState={this.state.viewState}
        />
        {this.state.chatScreenPosition === "1" && (
          <ChatScreen
            chatScreenPosition={this.state.chatScreenPosition}
            closeChatScreen={this.closeChatScreen}
          />
        )}
      </StyledApp>
    );
  }
}

export default App;
