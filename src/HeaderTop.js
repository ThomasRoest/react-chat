//@flow

import React from "react";
import styled from "styled-components";
import search from "./images/search.svg";

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

const HeaderTop = () => {
  return (
    <StyledHeaderTop>
      <div>
        <h1>Chat app test</h1>
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
  );
};

export default HeaderTop;
