//@flow

import React from "react";
import styled from "styled-components";
import HeaderTop from "./HeaderTop";
import camera from "./images/camera.svg";

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
`;

const HeaderNav = styled.nav`
  background-color: #075e54;
  font-size: 0.8em;
  font-weight: 600;
  height: 45px;
  display: flex;
  letter-spacing: 0.4px;
  justify-content: space-between;
  color: white;
  text-transform: uppercase;
  margin: 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
`;

const StyledNavItem = styled.a`
  flex-grow: 1;
  text-align: center;
  padding-top: 12px;
  transition: background-color 1.5s;
  border-bottom: ${props =>
    props.viewState === props.current ? "3px solid white" : "none"};
  img {
    color: white;
  }
  /* background-image: ${props =>
    props.icon === "true" ? `url(${camera}) ` : "none"}; */

  &:active {
    background-color: lightgray;
    transition: background-color 1.5s;
    border-bottom: 3px solid white;
  }
`;

type Props = {
  changeViewState: Function,
  viewState: string
};

const MainHeader = ({ changeViewState, viewState }: Props) => {
  return (
    <Header>
      <HeaderTop />
      <HeaderNav>
        <StyledNavItem
          data-nav="1"
          onClick={changeViewState}
          viewState={viewState}
          current="1"
          icon="true"
        >
          {/* this image messing up event.target? */}
          {/* <img src={camera} alt="camera" /> */}
          camera
        </StyledNavItem>
        <StyledNavItem
          data-nav="2"
          onClick={changeViewState}
          viewState={viewState}
          current="2"
        >
          calls
        </StyledNavItem>
        <StyledNavItem
          data-nav="3"
          onClick={changeViewState}
          viewState={viewState}
          current="3"
        >
          contacts
        </StyledNavItem>
        <StyledNavItem
          data-nav="4"
          onClick={changeViewState}
          viewState={viewState}
          current="4"
        >
          hello
        </StyledNavItem>
      </HeaderNav>
    </Header>
  );
};

export default MainHeader;
