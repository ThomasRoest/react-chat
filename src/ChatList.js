//@flow

import React from "react";
import styled from "styled-components";
import ChatListItem from "./ChatListItem";
import data from "./data.js";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
`;

const ChatList = () => {
  return (
    <StyledList>
      {/* {JSON.stringify(data)} */}
      {data.map(item => (
        <ChatListItem
          key={item.id}
          title={item.title}
          avatar={item.avatar}
          preview={item.preview}
        />
      ))}
    </StyledList>
  );
};

export default ChatList;
