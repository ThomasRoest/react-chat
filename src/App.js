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
`;

type State = {
  viewState: string,
  chatScreenIsVisible: boolean,
  currentChatId: ?number
};

class App extends React.Component<null, State> {
  state = {
    viewState: "2",
    chatScreenIsVisible: false,
    currentChatId: null,
    searchTerm: ""
  };

  handleSearchtermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  changeViewState = (event: SyntheticInputEvent<HTMLDataListElement>) => {
    const newState = event.target.dataset.nav;
    this.setState({ viewState: newState });
  };

  showChatScreen = id => {
    this.setState({ chatScreenIsVisible: true, currentChatId: id });
  };

  closeChatScreen = () => {
    this.setState({ chatScreenIsVisible: false, currentChatId: null });
  };

  render() {
    return (
      <StyledApp>
        <HeaderTop
          searchTerm={this.state.searchTerm}
          handleSearchtermChange={this.handleSearchtermChange}
        />
        <HeaderNav
          viewState={this.state.viewState}
          changeViewState={this.changeViewState}
        />
        <MainCarousel
          showChatScreen={this.showChatScreen}
          viewState={this.state.viewState}
          searchTerm={this.state.searchTerm}
        />

        {this.state.chatScreenIsVisible && (
          <ChatScreen
            currentChatId={this.state.currentChatId}
            closeChatScreen={this.closeChatScreen}
          />
        )}
      </StyledApp>
    );
  }
}

export default App;
