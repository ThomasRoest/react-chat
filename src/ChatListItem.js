//@flow

import React from "react";
import styled from "styled-components";
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
    /* check temp js */
  }
`;

const StyledContactDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 500px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const UserDetail = styled.div`
  /* div */
  /* padding: 10px; */
  height: 50%;
  width: 40%;
  background-color: white;

  img {
    width: 100%;
  }

  div {
    display: flex;
  }
`;

/* display: ${props => (props.isVisible === true ? "0px" : "35px")}; */

// background-color: white;
//   border-radius: ${props => (props.isVisible === true ? "0px" : "35px")};
//   transform: ${props => (props.isVisible === true ? "scaleX(1)" : "scaleX(0)")};
//   transition: border-radius 0.3s, transform 0.3s;

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
        <span>icon 1</span>
        <span>icon 2</span>
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
