//@flow

import React from "react";
import styled from "styled-components";
import ChatListItem from "./ChatListItem";
import { chats } from "./chats.js";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

type Props = {
  showChatScreen: Function
};

const ChatList = ({ showChatScreen }: Props) => {
  return (
    <StyledList>
      {chats.map(item => (
        <ChatListItem key={item.id} {...item} showChatScreen={showChatScreen} />
      ))}
    </StyledList>
  );
};

export default ChatList;
