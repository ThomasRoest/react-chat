//@flow

import React, { Component } from "react";
import styled from "styled-components";
import ChatListItem from "./ChatListItem";
import SearchResult from "./SearchResult";
import { chats } from "./data/chats.js";
import { messages } from "./data/messages.js";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

type Props = {
  showChatScreen: Function,
  searchTerm: string
};

class ChatList extends Component<Props> {
  filterBySearchTerm = (msg: Object) => {
    return (
      msg.content.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >=
      0
    );
  };

  render() {
    let searchResults = messages.filter(this.filterBySearchTerm);
    if (this.props.searchTerm.length >= 1) {
      return (
        <StyledList>
          {searchResults.map(item => (
            <SearchResult
              key={item.id}
              {...item}
              searchTerm={this.props.searchTerm}
            />
          ))}
        </StyledList>
      );
    } else {
      return (
        <StyledList>
          {chats.map(item => (
            <ChatListItem
              key={item.id}
              {...item}
              showChatScreen={this.props.showChatScreen}
            />
          ))}
        </StyledList>
      );
    }
  }
}

export default ChatList;
