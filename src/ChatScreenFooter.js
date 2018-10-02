//@flow

import React, { Component } from "react";
import styled from "styled-components";
import camera from "./images/camera-grey.svg";
import attachment from "./images/attachment.svg";
import happy from "./images/happy.svg";
import mic from "./images/mic.svg";

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

const InputGroup = styled.form`
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
    /* https://stackoverflow.com/questions/46684636/html-inputs-ignore-flex-basis-css-property */
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

class ChatScreenFooter extends Component<Props> {
  render() {
    return (
      <StyledChatScreenFooter onClick={() => console.log("eheheh")}>
        <InputGroup onSubmit={e => console.log(e.preventDefault())}>
          <span>
            <img src={happy} alt="" />
          </span>
          <input type="text" />
          <span>
            <img src={attachment} alt="" />
          </span>
          <span>
            <img src={camera} alt="" />
          </span>
        </InputGroup>
        <RecordIcon>
          {/* // conditionally render submit button */}
          <div>
            <img src={mic} alt="" />
          </div>
        </RecordIcon>
      </StyledChatScreenFooter>
    );
  }
}

export default ChatScreenFooter;
