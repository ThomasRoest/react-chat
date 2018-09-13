//@flow

import React from "react";
import styled from "styled-components";

const StyledHeaderNav = styled.nav`
  background: green;
  position: sticky;
  background-color: #075e54;
  top: 0;
  z-index: 1;
  font-size: 0.9em;
  font-weight: 600;
  height: 45px;
  display: flex;
  letter-spacing: 0.4px;
  justify-content: space-between;
  color: white;
  text-transform: uppercase;
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

const StyledNavItem = styled.a`
  text-align: center;
  transition: background-color 1.5s;
  color: ${props => (props.viewState === props.current ? "white" : "#83afaa")};
  border-bottom: ${props =>
    props.viewState === props.current ? "3px solid white" : "none"};
  &:active {
    background-color: lightgray;
    transition: background-color 1.5s;
    border-bottom: 3px solid white;
  }
  svg {
    fill: ${props => (props.viewState === props.current ? "white" : "#83afaa")};
  }
`;

type Props = {
  changeViewState: Function,
  viewState: string
};

const HeaderNav = ({ changeViewState, viewState }: Props) => {
  return (
    <StyledHeaderNav>
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
    </StyledHeaderNav>
  );
};

export default HeaderNav;
