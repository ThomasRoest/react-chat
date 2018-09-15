//@flow

import React, { Component } from "react";
import styled from "styled-components";

const StyledChatScreen = styled.div`
  background-color: #ece5dd;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  /* display: none; */
  /* opacity: 2; */
  /* width: 100%; */
  right: 0;
  z-index: 1;
`;

const ChatScreenHeader = styled.header`
  background: #075e54;
  position: fixed;
  width: 450px;
  height: 50px;
  /* max-width: inherit; */
  top: 0;
`;

const ChatScreenFooter = styled.footer`
  background: #075e54;
  position: fixed;
  bottom: 0;
  width: 450px;
  height: 50px;
  /* z-index: 100; */
`;

const OutgoingChatMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  /* float: left; */
  span {
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
    padding: 3px;
    border-radius: 3px;
    background: #fff;
    /* max-width: -moz-fit-content; */
    /* max-width: -webkit-fit-content; */
  }
`;

const ChatMessage = props => {
  if (props.status === "outgoing") {
    return (
      <OutgoingChatMessage>
        <span>
          Use the primary RSS hard drive, then you can quantify the online card!
        </span>
      </OutgoingChatMessage>
    );
  } else {
    return (
      <IncomingChatMessage>
        <span>program real-time matrix functionalities</span>
      </IncomingChatMessage>
    );
  }
};

export class ChatScreen extends Component {
  render() {
    return (
      <StyledChatScreen>
        <ChatScreenHeader>header</ChatScreenHeader>
        <ChatMessage status={"outgoing"} />
        <ChatMessage status={"incoming"} />
        <ChatMessage status={"outgoing"} />
        <ChatMessage status={"incoming"} />
        <ChatMessage status={"outgoing"} />
        <ChatMessage status={"outgoing"} />
        <ChatScreenFooter>
          footer
          <button onClick={this.props.closeChatScreen}>close</button>
        </ChatScreenFooter>
      </StyledChatScreen>
    );
  }
}

export default ChatScreen;
