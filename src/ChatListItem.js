//@flow

import React from "react";
import styled from "styled-components";

const StyledListItem = styled.a`
  background: white;
  padding: 5px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  &:active {
    background-color: lightgray;
  }
`;

const ChatAvatar = styled.div`
  padding: 10px;
  flex-basis: 15%;
  /* border: 1px solid blue; */
  img {
    border-radius: 50%;
  }
`;

const ChatTitle = styled.div`
  padding: 15px 10px 10px 10px;
  flex-basis: 70%;
  font-size: 1.1em;
  /* border: 1px solid green; */
  font-weight: bold;
  span {
    color: grey;
    font-size: 0.8em;
  }
`;

const ChatMeta = styled.div`
  padding: 15px 10px 10px 10px;
  flex-basis: 15%;
  color: grey;
  /* border: 1px solid purple; */
  flex-grow: 1;
`;

const ChatListItem = () => {
  return (
    <StyledListItem>
      <ChatAvatar>
        <img src="https://www.placecage.com/60/60" alt="" />
      </ChatAvatar>
      <ChatTitle>
        This is the chat title <br />
        <span>preview text here</span>
      </ChatTitle>
      <ChatMeta>meta</ChatMeta>
    </StyledListItem>
  );
};

export default ChatListItem;
