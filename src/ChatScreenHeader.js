//@flow

import React from "react";
import styled from "styled-components";
import phone from "./images/phone.svg";
import arrow from "./images/arrow-left2.svg";
import video from "./images/video-camera.svg";

const StyledChatScreenHeader = styled.div`
  display: flex;
  color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  background: #075e54;
  position: fixed;
  height: 60px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
`;

const ChatScreenHeaderLeft = styled.div`
  flex-basis: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a:first-child {
    padding-left: 10px;
    img {
      width: 20px;
    }
  }
  a:nth-child(2) {
    img {
      width: 40px;
      height: 40px;
      margin: 0 5px 0 5px;
      border-radius: 50%;
    }
  }
  a:nth-child(3) {
    color: white;
    text-decoration: none;
  }
`;

const ChatScreenHeaderRight = styled.div`
  display: flex;
  flex-basis: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a img {
    height: 20px;
  }
`;

const SettingsIcon = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  span {
    align-self: flex-end;
    width: 4px;
    height: 4px;
    margin: 1px;
    background: #fff;
    border-radius: 50%;
    display: block;
  }
`;

type Props = {
  msg: Object,
  closeChatScreen: Function
};

const ChatScreenHeader = ({ msg, closeChatScreen }: Props) => {
  return (
    <StyledChatScreenHeader>
      <ChatScreenHeaderLeft>
        <a onClick={closeChatScreen}>
          <img src={arrow} alt="arrow left icon" />
        </a>
        <a>
          <img src={msg.avatar} alt={msg.title} />
        </a>
        <span>{msg.title}</span>
      </ChatScreenHeaderLeft>
      <ChatScreenHeaderRight>
        <a>
          <img src={video} alt="phone icon" />
        </a>
        <a>
          <img src={phone} alt="phone icon" />
        </a>
        <SettingsIcon>
          <span />
          <span />
          <span />
        </SettingsIcon>
      </ChatScreenHeaderRight>
    </StyledChatScreenHeader>
  );
};

export default ChatScreenHeader;
