//@flow

import React, { Component } from "react";
import styled from "styled-components";
import { messages } from "./data/messages.js";
import { chats } from "./data/chats.js";
import ChatScreenFooter from "./ChatScreenFooter";
import ChatMessage from "./ChatMessage";
import ChatScreenHeader from "./ChatScreenHeader.js";

const StyledChatScreen = styled.div`
  background-color: #ece5dd;
  position: absolute;
  top: 0;
  z-index: 1;
`;

const ChatContent = styled.div`
  padding-top: 60px;
  padding-bottom: 50px;
  padding-right: 5px;
  padding-left: 5px;

  overflow: hidden;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

type State = {
  messages: Array<Object>
};

type Props = {
  closeChatScreen: Function,
  currentChatId: number,
  style: Object
};

class ChatScreen extends Component<Props, State> {
  state = {
    messages: []
  };

  componentDidMount() {
    this.setState({ messages });
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  addmessage = (formvalue: string) => {
    const newMessages = [...this.state.messages];
    const message = {
      id: Date.now(),
      content: formvalue,
      status: "outgoing"
    };
    window.scrollTo(0, document.body.scrollHeight);
    this.setState({ messages: newMessages.concat(message) });
  };

  render() {
    let msg;
    if (this.props.currentChatId) {
      msg = chats.find(item => item.id === this.props.currentChatId);
    } else {
      msg = chats.find(item => item.id === 64138);
    }
    return (
      <StyledChatScreen style={this.props.style}>
        <ChatScreenHeader
          msg={msg}
          closeChatScreen={this.props.closeChatScreen}
        />
        <ChatContent>
          {this.state.messages.map(item => (
            <ChatMessage
              key={item.id}
              content={item.content}
              status={item.status}
            />
          ))}
        </ChatContent>
        <ChatScreenFooter addMessage={this.addmessage} />
      </StyledChatScreen>
    );
  }
}

export default ChatScreen;
