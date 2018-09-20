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
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.1s linear;
  ${props =>
    props.chatScreenPosition === "1" &&
    css`
      transform: none;
      opacity: 1;
    `};
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
`;

const ChatScreenHeaderLeft = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: space-between;
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

const StyledChatScreenFooter = styled.footer`
  background: #ece5dd;
  /* position: sticky; */
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  max-width: 450px;
  display: flex;
  padding: 5px;
  /* width: 450px; */
  /* height: 50px; */
  /* z-index: 100; */
  /* div:first-child {
    
  }
  div:nth-child(2) {
    
  } */
`;

const InputGroup = styled.div`
  flex: 1 1 80%;
  display: flex;
  background-color: lightblue;
  input {
    flex: 1;
  }
`;

const RecordIcon = styled.div`
  /* background-color: yellow; */
  flex: 1 1 20%;
  div {
    height: 50px;
    width: 50px;
    background-color: #075e54;
    border-radius: 50%;
    margin: 0 auto;
  }
`;

const ChatScreenFooter = props => {
  return (
    <StyledChatScreenFooter>
      <InputGroup>
        <span class="InputAddOn-item">{/* <img src={phone} alt="" /> */}</span>
        <input class="InputAddOn-field" />
        <span class="InputAddOn-item">{/* <img src={phone} alt="" /> */}</span>
        <span class="InputAddOn-item">{/* <img src={phone} alt="" /> */}</span>
      </InputGroup>
      <RecordIcon>
        <div>{/* <img src={phone} alt="" /> */}</div>
      </RecordIcon>
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
          <ChatScreenHeaderLeft>
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
        </ChatScreenHeader>
        <ChatContent className="element">
          {messages.map(item => (
            <ChatMessage key={item.id} {...item} />
          ))}
        </ChatContent>
        <ChatScreenFooter />
      </StyledChatScreen>
    );
  }
}

export default ChatScreen;
