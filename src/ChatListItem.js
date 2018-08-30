//@flow

import React from "react";
import styled from "styled-components";

const StyledListItem = styled.a`
  background: white;
  border-bottom: 1px solid #e4e4e4;
  padding: 12px 15px 12px 15px;
  display: flex;
  align-items: center;
  &:active {
    background-color: #e4e4e4;
  }
`;

const ListItemAvatar = styled.div`
  flex-basis: 15%;
  img {
    border-radius: 50%;
  }
`;

const ListItemContent = styled.div`
  flex-basis: 85%;
  padding-left: 13px;
`;

const ContentTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3px;
  h4 {
    margin: 0;
    font-weight: 500;
    font-size: 1.1em;
  }
  span {
    color: gray;
    font-size: 0.8em;
  }
`;
const ContentBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  span:first-child {
    font-size: 0.9em;
  }
  span {
    color: grey;
    font-size: 0.8em;
  }
`;

const ChatListItem = () => {
  return (
    <StyledListItem>
      <ListItemAvatar>
        <img src="https://www.placecage.com/50/50" alt="" />
      </ListItemAvatar>
      <ListItemContent>
        <ContentTopRow>
          <h4>Chat title over here</h4>
          <span>06-08-18</span>
        </ContentTopRow>
        <ContentBottomRow>
          <span>I'm the preview of the message....</span>
          <span>icon</span>
        </ContentBottomRow>
      </ListItemContent>
    </StyledListItem>
  );
};

export default ChatListItem;
