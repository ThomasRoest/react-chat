import React from "react";
import ChatList from "./ChatList";
import styled from "styled-components";

const Carousel = styled.div`
  min-width: 200px;
  min-height: 850px;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
  padding: 0;
`;

const CarouselTrack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  transition: transform 0.2s ease 0s;
  transform: translateX(${props => props.goToSlide});
`;

const Slide = styled.div`
  position: absolute;
  color: red;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  /* opacity: 1; */
  height: 100%;
  /* opacity: 0; */
  background-color: lightblue;
  transition: transform 0.2s;
  transform: translateX(${props => props.defaultPosition});
`;

const MainCarousel = ({ viewState }) => {
  let position;
  if (viewState === "1") {
    position = "0%";
  } else if (viewState === "2") {
    position = "-100%";
  } else if (viewState === "3") {
    position = "-200%";
  } else if (viewState === "4") {
    position = "-300%";
  }
  return (
    <Carousel>
      <CarouselTrack goToSlide={position}>
        <Slide defaultPosition={"0%"}>slide 1 jo</Slide>
        <Slide defaultPosition={"100%"}>
          <ChatList />
        </Slide>
        <Slide defaultPosition={"200%"}>and some more</Slide>
        <Slide defaultPosition={"300%"}>ok then</Slide>
      </CarouselTrack>
    </Carousel>
  );
};

export default MainCarousel;
