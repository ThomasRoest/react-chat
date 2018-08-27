//@flow

import React from "react";
import styled from "styled-components";

const StyledListItem = styled.a`
  background: white;
  padding: 10px;
  /* border-bottom: 1px solid lightgrey; */
  display: flex;
  align-items: center;
  &:active {
    background-color: lightgray;
  }
`;

const ChatAvatar = styled.div`
  /* padding: 10px; */
  flex-basis: 15%;
  /* border: 1px solid blue; */
  img {
    border-radius: 50%;
  }
`;

const ChatTitle = styled.div`
  padding-left: 10px; /* padding: 15px 10px 10px 10px; */
  flex-basis: 70%;
  font-size: 1.1em;
  /* border-bottom: 0.5px solid #e4e4e4; */
  /* border: 1px solid green; */
  h3 {
    font-size: 1em;
    font-weight: 700;
    margin: 0;
  }
  span {
    color: grey;
    font-size: 0.9em;
  }
`;

const ChatMeta = styled.div`
  /* padding: 15px 10px 10px 10px; */
  flex-basis: 15%;
  color: grey;
  /* border: 1px solid purple; */
  flex-grow: 1;
  /* align-self: flex-start; */
`;

const ChatListItem = () => {
  return (
    <StyledListItem>
      <ChatAvatar>
        <img src="https://www.placecage.com/50/50" alt="" />
      </ChatAvatar>
      <ChatTitle>
        <h3>This is the chat title</h3>
        <span>preview text here</span>
      </ChatTitle>
      <ChatMeta>meta</ChatMeta>
    </StyledListItem>
  );
};

export default ChatListItem;
