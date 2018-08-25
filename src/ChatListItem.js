//@flow

import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  background: white;
  padding: 1em;
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  &:active {
    background-color: lightgray;
  }
`;

const ListItemImage = styled.div`
  img {
    border-radius: 50%;
  }
`;

const ChatListItem = () => {
  return (
    <a href="">
      <StyledListItem>
        <ListItemImage>
          <img src="https://www.placecage.com/50/50" alt="" />
        </ListItemImage>
        <section>Username and info here some other stuff</section>
        <section>meta</section>
      </StyledListItem>
    </a>
  );
};

export default ChatListItem;
