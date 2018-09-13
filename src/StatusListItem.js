//@flow

import React from "react";
import styled from "styled-components";
import { status } from "./data.js";

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
  /* background-color: yellow; */
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
  /* border-bottom: 1px solid #e4e4e4; */
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
  span:first-child {
    font-size: 0.9em;
    white-space: nowrap;
    overflow: hidden;
    max-width: 250px;
    text-overflow: ellipsis;
  }
  span {
    color: #737373;
    font-size: 0.8em;
  }
`;

const AddStatus = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #20c659;
  color: white;
  position: absolute;
  text-align: center;
  font-weight: bold;
  top: 40px;
  left: 50px;
`;

type Props = {
  title: string,
  preview: string,
  avatar: string
};

const StatusListItem = ({ title, preview, avatar }: Props) => (
  <StyledListItem>
    <ListItemAvatar>
      {/* <pre>
        <code>{JSON.stringify(status)}</code>
      </pre> */}
      <img src={status[0].avatar} alt={title} />
      <AddStatus>+</AddStatus>
    </ListItemAvatar>
    <ListItemContent>
      <ContentTopRow>
        <h4>{status[0].title}</h4>
        {/* <span>06-08-18</span> */}
        {/* <span>🚀 🔥😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 </span> */}
      </ContentTopRow>
      <ContentBottomRow>
        <span>{status[0].preview}</span>
        {/* <span>icon</span> */}
      </ContentBottomRow>
    </ListItemContent>
  </StyledListItem>
);

export default StatusListItem;
