//@flow

import React, { Component } from "react";
import styled from "styled-components";
import search from "./images/search.svg";
import arrowLeft from "./images/arrow-left2-2.svg";

const StyledHeaderTop = styled.div`
  background-color: #075e54;
  height: 5px;
  display: flex;
  height: 60px;
  align-items: center;
`;

const SearchBar = styled.div`
  position: absolute;
  width: 100%;
  flex: 0.5;
  display: flex;
  align-items: center;
  transform-origin: 82%;
  background-color: white;
  border-radius: ${props => (props.isVisible === true ? "0px" : "35px")};
  transform: ${props => (props.isVisible === true ? "scaleX(1)" : "scaleX(0)")};
  transition: border-radius 0.4s, transform 0.4s;
  input[type="text"] {
    border-radius: 35px;
    width: 90%;
    height: 60px;
    font-size: 1em;
    border: 0px;
    min-width: 0;
    margin-left: 10px;
  }
  img {
    height: 20px;
    margin: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Title = styled.div`
  flex: 5;
  h1 {
    color: white;
    font-weight: 500;
    font-size: 1.3em;
    padding-left: 17px;
  }
`;
const SearchIcon = styled.div`
  flex: 0.5;
  img {
    margin: 0;
    padding: 0;
    height: 17px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SettingsIcon = styled.div`
  flex: 0.5;
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

type State = {
  searchInputIsvisible: boolean
};

type Props = {
  handleSearchtermChange: Function,
  searchTerm: string,
  searchInputIsvisible: boolean,
  showSearchInput: boolean,
  closeSearchInput: Function
};

class HeaderTop extends Component<Props, State> {
  render() {
    return (
      <StyledHeaderTop>
        <Title>
          <h1>React Chat</h1>
        </Title>
        <SearchBar isVisible={this.props.searchInputIsvisible}>
          <img
            src={arrowLeft}
            alt="search"
            onClick={this.props.closeSearchInput}
          />
          <input
            type="text"
            placeholder="Search..."
            onChange={this.props.handleSearchtermChange}
            value={this.props.searchTerm}
          />
        </SearchBar>

        <SearchIcon>
          <img src={search} alt="search" onClick={this.props.showSearchInput} />
        </SearchIcon>
        <SettingsIcon>
          <span />
          <span />
          <span />
        </SettingsIcon>
      </StyledHeaderTop>
    );
  }
}

export default HeaderTop;
