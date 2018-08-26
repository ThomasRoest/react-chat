//@flow

import React from "react";
import styled from "styled-components";

const StyledListItem = styled.a`
  background: white;

  border-bottom: 1px solid lightgrey;
  display: flex;
  &:active {
    background-color: lightgray;
  }
`;

const ChatAvatar = styled.div`
  flex-basis: 15%;
  border: 1px solid blue;
  background-image: url("https://www.placecage.com/50/50");
`;

const ChatTitle = styled.div`
  padding: 10px;
  flex-basis: 70%;
  border: 1px solid green;
  font-weight: bold;
  span {
    color: grey;
    font-size: 0.8em;
  }
`;

const ChatMeta = styled.div`
  flex-basis: 15%;
  border: 1px solid purple;
  flex-grow: 1;
`;

const ChatListItem = () => {
  return (
    <StyledListItem>
      <ChatAvatar />
      <ChatTitle>
        This is the chat title <br />
        <span>preview text here</span>
      </ChatTitle>
      <ChatMeta>meta data</ChatMeta>
    </StyledListItem>
  );
};

export default ChatListItem;
