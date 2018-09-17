//@flow

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { messages } from "./messages.js";

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
    `}
`;

const ChatScreenHeader = styled.div`
  display: flex;
  color: white;
  justify-content: space-around;
  background: #075e54;
  position: fixed;
  width: 450px;
  /* height: 50px; */
  /* max-width: inherit; */
  /* top: 0; */
`;

const StyledChatScreenFooter = styled.footer`
  background: #075e54;
  /* position: sticky; */
  position: fixed;
  bottom: 0;
  width: 450px;
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
      <StyledChatScreen
        primary
        chatScreenPosition={this.props.chatScreenPosition}
      >
        <ChatScreenHeader>
          <div className="element">icon</div>
          <div>image</div>
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
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
