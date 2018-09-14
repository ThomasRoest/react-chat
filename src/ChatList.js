//@flow

import React from "react";
import styled from "styled-components";
import ChatListItem from "./ChatListItem";
import { chats } from "./chats.js";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

const ChatList = () => {
  return (
    <StyledList>
      {chats.map(item => (
        <ChatListItem key={item.id} {...item} />
      ))}
    </StyledList>
  );
};

export default ChatList;
