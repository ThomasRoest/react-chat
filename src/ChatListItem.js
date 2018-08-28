//@flow

import React from "react";
import styled from "styled-components";

const StyledListItem = styled.a`
  background: white;
  padding: 10px;
  /* border-bottom: 1px solid #e4e4e4; */
  display: flex;
  /* align-items: center; */
  &:active {
    background-color: #e4e4e4;
  }
`;

const ListItemAvatar = styled.div`
  /* padding: 10px; */
  flex-basis: 15%;
  img {
    border-radius: 50%;
  }
`;

const ListItemContent = styled.div`
  flex-basis: 85%;
  border-bottom: 1px solid #e4e4e4;
  padding-top: 5px;
  /* align-self: cente */
`;

const ContentTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  h4 {
    margin: 0;
    font-weight: 500;
    font-size: 1.1em;
  }
  span {
    color: gray;
    font-size: 0.9em;
  }
`;
const ContentBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: grey;
  }
`;
// const ChatTitle = styled.div`
//   padding-left: 10px; /* padding: 15px 10px 10px 10px; */
//   flex-basis: 70%;
//   font-size: 1.1em;
//   h3 {
//     font-size: 1em;
//     font-weight: 500;
//     margin: 0;
//   }
//   span {
//     /* margin: 100px; */
//     color: grey;
//     font-size: 0.9em;
//   }
// `;

// const ChatMeta = styled.div`
//   /* padding: 15px 10px 10px 10px; */
//   flex-basis: 15%;
//   color: grey;
//   font-size: 0.7em;
//   /* border: 1px solid purple; */
//   flex-grow: 1;
//   /* align-self: flex-start; */
// `;

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
      {/* <ChatTitle>
        <h3>This is the chat title</h3>
        <span>preview text here</span>
      </ChatTitle> */}
      {/* <ChatMeta>06-08-18</ChatMeta> */}
    </StyledListItem>
  );
};

export default ChatListItem;
