//@flow

import React from "react";
import MainHeader from "./MainHeader";
import MainContainer from "./MainContainer";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import MainCarousel from "./MainCarousel";
import search from "./images/search.svg";

injectGlobal`
   *, *:before, *:after {
    box-sizing: border-box;
  }
   body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
   }
`;

const StyledHeaderTop = styled.div`
  background-color: #075e54;
  height: 5px;
  display: flex;
  height: 60px;
  align-items: center;
  div h1 {
    color: white;
    font-weight: 500;
    font-size: 1.3em;
    padding-left: 17px;
  }
  div:nth-child(1) {
    flex-basis: 90%;
  }
`;
const SearchIcon = styled.div`
  flex-basis: 10%;
  img {
    margin: 0;
    padding: 0;
    height: 17px;
  }
`;

const SettingsIcon = styled.div`
  flex-basis: 10%;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  span {
    align-self: flex-end;
    width: 4px;
    height: 4px;
    margin: 1px;
    background: #fff;
    border-radius: 50%;
    display: block;
  }
`;

const StyledNavItem = styled.a`
  text-align: center;

  transition: background-color 1.5s;
  border-bottom: ${props =>
    props.viewState === props.current ? "3px solid white" : "none"};
  color: ${props => (props.viewState === props.current ? "white" : "#83afaa")};

  &:active {
    background-color: lightgray;
    transition: background-color 1.5s;
    border-bottom: 3px solid white;
  }
  svg {
    fill: ${props => (props.viewState === props.current ? "white" : "#83afaa")};
  }
`;

type State = {
  viewState: string
};

const HeaderTop = styled.header`
  background: green;
  padding: 20px;
`;
const bcolor = "#075e54";

const HeaderNav = styled.nav`
  background: green;
  position: sticky;
  background-color: ${bcolor}
  /* padding: 20px; */
  top: 0;
  z-index: 1;
  font-size: 0.9em;
  font-weight: 600;
  height: 45px;
  display: flex;
  letter-spacing: 0.4px;
  justify-content: space-between;
  /* top: 50px; */
  /* align-items: center; */
  color: white;
  text-transform: uppercase;
  /* margin: 0; */
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  a {
    flex-grow: 2
    padding-top: 15px;
  }
  a:first-child {
    flex-grow: 1
    padding-top: 10px;
  }
`;
const MainContent = styled.main`
  background: yellow;
  p {
    margin: 0;
    color: blue;
  }
`;

class App extends React.Component<null, State> {
  state = {
    viewState: "2"
  };

  changeViewState = event => {
    const newState = event.target.dataset.nav;
    console.log(event.target.dataset);
    this.setState({ viewState: newState });
  };

  render() {
    const { changeViewState } = this;
    const { viewState } = this.state;
    return (
      <div>
        <StyledHeaderTop>
          <div>
            <h1>Whaddup</h1>
          </div>
          <SearchIcon>
            <img src={search} alt="search" />
          </SearchIcon>
          <SettingsIcon>
            <span />
            <span />
            <span />
          </SettingsIcon>
        </StyledHeaderTop>
        <HeaderNav>
          <StyledNavItem
            data-nav="1"
            onClick={changeViewState}
            viewState={viewState}
            current="1"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>camera</title>
              <path d="M0 6c0-1.1 0.9-2 2-2h3l2-2h6l2 2h3c1.105 0 2 0.895 2 2v0 10c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-10zM10 16c2.761 0 5-2.239 5-5s-2.239-5-5-5v0c-2.761 0-5 2.239-5 5s2.239 5 5 5v0zM10 14c-1.657 0-3-1.343-3-3s1.343-3 3-3v0c1.657 0 3 1.343 3 3s-1.343 3-3 3v0z" />
            </svg>
          </StyledNavItem>
          <StyledNavItem
            data-nav="2"
            onClick={changeViewState}
            viewState={viewState}
            current="2"
          >
            CHATS
          </StyledNavItem>
          <StyledNavItem
            data-nav="3"
            onClick={changeViewState}
            viewState={viewState}
            current="3"
          >
            STATUS
          </StyledNavItem>
          <StyledNavItem
            data-nav="4"
            onClick={changeViewState}
            viewState={viewState}
            current="4"
          >
            CALLS
          </StyledNavItem>
        </HeaderNav>
        <MainCarousel viewState={viewState} />
        {/* <MainContent>
          <p>title</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id augue
        </MainContent> */}
        {/* <MainHeader
          changeViewState={this.changeViewState}
          viewState={this.state.viewState}
        /> */}
        {/* <MainContainer viewState={this.state.viewState} /> */}
      </div>
    );
  }
}

export default App;
