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
  display: flex;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  max-width: 450px;
  padding: 5px;
`;

const StyledForm = styled.form`
  flex: 0 1 85%;
  display: flex;
  align-items: center;
  span {
    flex-basis: 14%;
    background-color: white;
    height: 40px;
    text-align: center;
    img { 
      margin-top: 10px;
      height: 20px; 
    }
    &:first-child {
    border-radius: 50% 0% 0% 50%;
    }
    &:last-child {
      border-radius: 0% 50% 50% 0%;
    }
    
  }
  input {
    flex-basis: 58%;
    min-width: 0
    appearance:none
    height: 40px;
    border: 0px;
    background-color: #fff;
    font-size: 1em;
    }
  }
`;

const RecordIcon = styled.div`
  flex: 0 1 15%;
  div {
    height: 43px;
    width: 43px;
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

  handleChange = event => {
    this.setState({ formValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addMessage(this.state.formValue);
    this.setState({ formValue: "" });
  };
  render() {
    return (
      <StyledChatScreenFooter>
        <StyledForm onSubmit={this.handleSubmit}>
          <span>
            <img src={happy} alt="" />
          </span>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.formValue}
          />
          <span>
            <img src={attachment} alt="" />
          </span>
          <span>
            <img src={camera} alt="" />
          </span>
        </StyledForm>
        <RecordIcon>
          {this.state.formValue.length >= 1 && (
            <div onClick={this.handleSubmit}>
              <img src={arrow} alt="" />
            </div>
          )}
          {this.state.formValue.length === 0 && (
            <div>
              <img src={mic} alt="" />
            </div>
          )}
        </RecordIcon>
      </StyledChatScreenFooter>
    );
  }
}

export default ChatScreenFooter;
