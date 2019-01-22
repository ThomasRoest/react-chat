//@flow

import React from "react";
import styled from "styled-components";
import phone2 from "./images/phone2.svg";
import messageSquare from "./images/message-square.svg";
import video from "./images/video.svg";
import info from "./images/info.svg";
import { truncateString } from "./helpers";
import { Transition } from "react-spring";

const StyledListItem = styled.a`
  background: #fafafa;
  display: flex;
  align-items: center;
  &:active {
    background-color: #e4e4e4;
  }
  &:hover {
    cursor: pointer;
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
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledContactDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 500px;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 9999;
`;

const UserDetail = styled.div`
  width: 60%;
  max-height: 300px;
  background-color: white;

  img {
    width: 100%;
  }

  div {
    padding: 10px;
    margin: 0;
    background-color: white;
    display: flex;
    justify-content: space-between;
    img {
      max-width: 30px;
    }
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

const ContactDetail = ({ avatar, title, style, toggleAvatar }) => (
  <StyledContactDetail style={style} onClick={toggleAvatar}>
    <UserDetail>
      <img src={avatar} alt={title} />
      <div>
        <img src={phone2} alt="call" />
        <img src={messageSquare} alt="message" />
        <img src={video} alt="video" />
        <img src={info} alt="info" />
      </div>
    </UserDetail>
  </StyledContactDetail>
);

type Props = {
  title: string,
  preview: string,
  avatar: string,
  showChatScreen: Function,
  id: number
};

type State = {
  avatarIsOpen: boolean
};

class ChatListItem extends React.Component<Props, State> {
  state = {
    avatarIsOpen: false
  };

  toggleAvatar = () => {
    this.setState(prevState => ({
      avatarIsOpen: !prevState.avatarIsOpen
    }));
    console.log(this.state);
  };

  render() {
    const { id, title, preview, avatar, showChatScreen } = this.props;
    const show = this.state.avatarIsOpen;
    return (
      <StyledListItem>
        <Transition
          items={show}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: 100 }}
        >
          {show =>
            show &&
            (props => (
              <ContactDetail
                title={title}
                avatar={avatar}
                style={props}
                toggleAvatar={this.toggleAvatar}
              />
            ))
          }
        </Transition>

        <ListItemAvatar onClick={this.toggleAvatar}>
          <img src={avatar} alt={title} />
        </ListItemAvatar>
        <ListItemContent onClick={() => showChatScreen(id)}>
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
  }
}

export default ChatListItem;
