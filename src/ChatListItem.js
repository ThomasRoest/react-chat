//@flow

import React from "react";
import styled from "styled-components";
import { truncateString } from "./helpers";

const StyledListItem = styled.a`
  background: #fafafa;
  display: flex;
  align-items: center;
  &:active {
    background-color: #e4e4e4;
  }
`;

const ListItemAvatar = styled.div`
  flex-basis: 20%;
  padding-left: 10px;
  padding-right: 5px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const ListItemContent = styled.div`
  flex-basis: 80%;
  border-bottom: 1px solid #e4e4e4;
  padding-left: 13px;
  padding: 17px 15px 17px 0px;
`;

const ContentTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4.5px;
  h4 {
    margin: 0;
    color: #202020;
    font-weight: 500;
    font-size: 1.1em;
  }
  span {
    color: gray;
    font-size: 0.7em;
  }
`;

const ContentBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  .preview {
    font-size: 0.9em;
    color: #737373;
  }
`;

type Props = {
  title: string,
  preview: string,
  avatar: string,
  showChatScreen: Function,
  id: number
};

const ChatListItem = ({
  id,
  title,
  preview,
  avatar,
  showChatScreen
}: Props) => (
  <StyledListItem onClick={() => showChatScreen(id)}>
    <ListItemAvatar>
      <img src={avatar} alt={title} />
    </ListItemAvatar>
    <ListItemContent>
      <ContentTopRow>
        <h4>{title}</h4>
        <span>06-08-18</span>
      </ContentTopRow>
      <ContentBottomRow>
        <span className="preview">{truncateString(preview, 40)}</span>
      </ContentBottomRow>
    </ListItemContent>
  </StyledListItem>
);

export default ChatListItem;
