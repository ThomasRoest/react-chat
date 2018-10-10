//@flow

import React from "react";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
// import { Transition } from "react-spring";
// import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";
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
`;

type State = {
  viewState: string,
  chatScreenIsVisible: boolean
};

class App extends React.Component<null, State> {
  state = {
    viewState: "2",
    chatScreenIsVisible: false
  };

  changeViewState = (event: KeyboardEvent) => {
    const newState = event.target.dataset.nav;
    this.setState({ viewState: newState });
  };

  showChatScreen = () => {
    this.setState({ chatScreenIsVisible: true });
  };

  closeChatScreen = () => {
    this.setState({ chatScreenIsVisible: false });
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

        {/* <Transition
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          impl={TimingAnimation}
          config={{ duration: 100, easing: Easing.linear }}
        >
          {this.state.chatScreenIsVisible &&
            (styles => (
              <ChatScreen
                closeChatScreen={this.closeChatScreen}
                styles={styles}
              />
            ))}
        </Transition> */}

        {this.state.chatScreenIsVisible && (
          <ChatScreen closeChatScreen={this.closeChatScreen} />
        )}
      </StyledApp>
    );
  }
}

export default App;
