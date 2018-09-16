//@flow

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { messages } from "./messages.js";

const StyledChatScreen = styled.div`
  background-color: #ece5dd;
  position: absolute;
  top: 0;
  left: 0;
  /* bottom: 0; */
  /* display: none; */
  /* opacity: 2; */
  /* width: 100%; */
  right: 0;
  z-index: 1;
  /* transform: translateY(100%); */

  /* transform: scale(); */
  /* transform: scale(1.1, 1.1) translate(-20%, 30px); */
  /* opacity: .2; */
  /* transition: opacity(0.5) */
  /* transform: opacity(0.6) */
  transform: scale(0);
  /* equalto scaleX(0.7) scaleY(0.7) */

  /* transition: transform 0.1s; */
  /* .element { */

    ${props =>
      props.chatScreenPosition === "1" &&
      css`
        animation-name: fadeIn;
        animation-duration: 0.1s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-direction: normal;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-play-state: running;

        @keyframes fadeIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}

      ${props =>
        props.chatScreenPosition === "0" &&
        css`
          animation-name: fadeOut;
          animation-duration: 0.5s;
          animation-timing-function: linear;
          animation-delay: 0s;
          animation-direction: normal;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          animation-play-state: running;

          @keyframes fadeOut {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
        `}



  /* transform: scale(${props => props.chatScreenPosition}); */
  /* opacity: ${props => props.chatScreenPosition}; */
  /* transition: transform 0.3s; */
  /* transition: opacity 0.3s; */
  /* transition: all 0.3s; */
  /* } */
  /* transform: scale(0); */
  /* opacity: 0; */

  /* https://cssreference.io/property/animation-fill-mode/ */
`;

const ChatScreenHeader = styled.header`
  display: flex;
  position: relative;
  color: white;
  justify-content: space-around;
  background: #075e54;
  /* position: fixed; */
  width: 450px;
  height: 50px;
  /* max-width: inherit; */
  top: 0;
`;

const StyledChatScreenFooter = styled.footer`
  background: #075e54;
  position: sticky;
  /* position: fixed; */
  bottom: 0;
  /* width: 450px; */
  height: 50px;
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
