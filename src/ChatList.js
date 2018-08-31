//@flow

import React from "react";
import styled from "styled-components";
import ChatListItem from "./ChatListItem";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

const ChatList = () => {
  return (
    <StyledList>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </StyledList>
  );
};

export default ChatList;
