//@flow

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { messages } from "./messages.js";
import phone from "./images/phone.svg";
import arrow from "./images/arrow-left2.svg";
import video from "./images/video-camera.svg";

const StyledChatScreen = styled.div`
  background-color: #ece5dd;
  position: absolute;
  top: 0;
  z-index: 1;
  /* transform: scale(${props => props.chatScreenPosition}); */
  transform: scale(0);
  transition: opacity .1s linear; 
  opacity: 0;

  ${props =>
    props.chatScreenPosition === "1" &&
    css`
      transform: none;
      opacity: 1;
      /* transition: all 1s; */
    `}
`;

const ChatScreenHeader = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  background: #075e54;
  position: fixed;
  height: 60px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  a:first-child,
  a:nth-child(4),
  a:nth-child(5) {
    /* flex-basis: 5%; */
    img {
      height: 20px;
      /* width: 20px; */
    }
  }
  a:nth-child(2) {
    img {
      /* width: 40px; */
      height: 40px;
      border-radius: 50%;
    }
  }
`;

const StyledChatScreenFooter = styled.footer`
  background: #075e54;
  /* position: sticky; */
  position: fixed;
  bottom: 0;
  /* width: 450px; */
  /* height: 50px; */
  /* z-index: 100; */
`;

const OutgoingChatMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  /* float: left; */
  span {
    max-width: 75%;
    margin-top: 7px;
    background: #dcf8c6;
    padding: 3px;
    border-radius: 3px;
    /* max-width: -moz-fit-content; */
    /* max-width: -webkit-fit-content; */
  }
`;

const IncomingChatMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  /* width: 100%; */
  /* float: right; */
  span {
    margin-top: 7px;
    max-width: 75%;
    padding: 3px;
    border-radius: 3px;
    background: #fff;
    /* max-width: -moz-fit-content; */
    /* max-width: -webkit-fit-content; */
  }
`;

const ChatScreenFooter = props => {
  return (
    <StyledChatScreenFooter>
      footer
      <button onClick={props.closeChatScreen}>close</button>
    </StyledChatScreenFooter>
  );
};

const SettingsIcon = styled.div`
  /* flex-basis: 10%; */
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

const ChatContent = styled.div`
  /* color: red; */
`;

const ChatMessage = props => {
  if (props.status === "outgoing") {
    return (
      <OutgoingChatMessage>
        <span>{props.phrase1}</span>
      </OutgoingChatMessage>
    );
  } else {
    return (
      <IncomingChatMessage>
        <span>{props.phrase1}</span>
      </IncomingChatMessage>
    );
  }
};

type State = {
  messages: Array<string>
};

type Props = {
  chatScreenPosition: string,
  closeChatScreen: Function
};

export class ChatScreen extends Component<Props, State> {
  state = {
    messages: []
  };
  componentDidMount() {
    this.setState({ messages: ["hello there"] });
  }
  render() {
    return (
      <StyledChatScreen chatScreenPosition={this.props.chatScreenPosition}>
        <ChatScreenHeader>
          <a onClick={this.props.closeChatScreen}>
            <img src={arrow} alt="arrow left icon" />
          </a>
          <a>
            <img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/gauchomatt/128.jpg"
              alt="user avatar"
            />
          </a>
          <a href="">pete</a>
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
        </ChatScreenHeader>
        <ChatContent className="element">
          {messages.map(item => (
            <ChatMessage key={item.id} {...item} />
          ))}
        </ChatContent>
        <ChatScreenFooter closeChatScreen={this.props.closeChatScreen} />
      </StyledChatScreen>
    );
  }
}

export default ChatScreen;
