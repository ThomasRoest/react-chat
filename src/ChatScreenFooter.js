//@flow

import React, { Component } from "react";
import styled from "styled-components";
import camera from "./images/camera-grey.svg";
import attachment from "./images/attachment.svg";
import happy from "./images/happy.svg";
import mic from "./images/mic.svg";
import arrow from "./images/arrow-right.svg";

const StyledChatScreenFooter = styled.footer`
  background: #ece5dd;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  max-width: 450px;
  padding: 5px;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: flex-start;
  
  .input-addon {
    min-width: 40px;
    background-color: white;
    height: 40px;
    text-align: center;
    img {
      margin-top: 10px;
      height: 20px;
    }
    &:nth-child(1) {
      border-radius: 50% 0% 0% 50%;
    }
    &:nth-child(4) {
      border-radius: 0% 50% 50% 0%;
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    appearance:none
    height: 40px;
    border: 0px;
    background-color: #fff;
    font-size: 1em;
  }
`;

const RecordIcon = styled.div`
  padding-left: 5px;
  button[type="submit"] {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #075e54;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0px;
    padding: 0;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    img {
      height: 20px;
      height: 20px;
    }
  }
  div {
    height: 40px;
    width: 40px;
    background-color: #075e54;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 20px;
    }
  }
`;

type Props = {
  addMessage: Function
};

type State = {
  formValue: string
};

class ChatScreenFooter extends Component<Props, State> {
  state = {
    formValue: ""
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ formValue: event.target.value });
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();
    this.props.addMessage(this.state.formValue);
    this.setState({ formValue: "" });
  };

  addEmoji = () => {
    this.setState({ formValue: "😎" });
  };

  render() {
    return (
      <StyledChatScreenFooter>
        <StyledForm onSubmit={this.handleSubmit}>
          <span className="input-addon">
            <img src={happy} alt="" onClick={this.addEmoji} />
          </span>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.formValue}
          />
          <span className="input-addon">
            <img src={attachment} alt="" />
          </span>
          <span className="input-addon">
            <img src={camera} alt="" />
          </span>
          <RecordIcon>
            {this.state.formValue.length >= 1 && (
              <button type="submit">
                <img src={arrow} alt="" />
              </button>
            )}
            {this.state.formValue.length === 0 && (
              <div>
                <img src={mic} alt="" />
              </div>
            )}
          </RecordIcon>
        </StyledForm>
      </StyledChatScreenFooter>
    );
  }
}

export default ChatScreenFooter;
