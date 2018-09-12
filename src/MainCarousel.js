import React from "react";
// import "./carousel.css";
import ChatList from "./ChatList";
import styled from "styled-components";

const Carousel = styled.div`
  min-width: 200px;
  min-height: 850px;
  overflow-y: hidden;
  overflow-x: hidden;
  /* text-align: center; */
  position: relative;
  padding: 0;
  list-style: none;
  /* ::-webkit-scrollbar {
    display: none;
  } */
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

const Slide1 = styled.li`
  color: red;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  /* opacity: 1; */
  height: 100%;
  position: absolute;
  /* opacity: 0; */
  background-color: lightblue;
  transition: transform 0.2s;
  transform: translateX(0%);
`;

const Slide2 = styled.li`
  display: block;
  top: 0;
  left: 0;
  right: 0;
  /* opacity: 1; */
  height: 100%;
  position: absolute;
  /* opacity: 0; */
  background-color: lightblue;
  transition: transform 0.2s;
  transform: translateX(100%);
`;

const Slide3 = styled.li`
  display: block;
  top: 0;
  left: 0;
  right: 0;
  /* opacity: 1; */
  height: 100%;
  position: absolute;
  /* opacity: 0; */
  background-color: lightblue;
  transition: transform 0.2s;
  transform: translateX(200%);
`;

const Slide4 = styled.li`
  display: block;
  top: 0;
  left: 0;
  right: 0;
  /* opacity: 1; */
  height: 100%;
  position: absolute;
  /* opacity: 0; */
  background-color: lightblue;
  transition: transform 0.2s;
  transform: translateX(300%);
`;

const MainCarousel = ({ viewState }) => {
  let percentage;
  if (viewState === "1") {
    percentage = "0%";
  } else if (viewState === "2") {
    percentage = "-100%";
  } else if (viewState === "3") {
    percentage = "-200%";
  } else if (viewState === "4") {
    percentage = "-300%";
  }
  // add slide component with translateX props percentage
  return (
    <Carousel>
      <CarouselTrack goToSlide={percentage}>
        <Slide1>
          slide 1 slide 1 slide 1 slide 1 slide 1 slide 1 slide 1 slide 1<ul />
          <li>asdfasdf</li>
          <li>asdfasdf</li>
          <li>asdfasdf</li>
          <li>asdfasdf</li>
        </Slide1>
        <Slide2>
          <ChatList />
        </Slide2>
        <Slide3>slide 3</Slide3>
        <Slide4>slide 4</Slide4>

        {/* <li className="carousel__slide ">
          <ChatList />
        </li>
        <li className="carousel__slide "> */}
        {/* <ul className="testinglist">
            <li>{trackClass}</li>
            <li>should be status here</li>
          </ul> */}
        {/* </li> */}
        {/* <li className="carousel__slide "> */}
        {/* <ul className="testinglist">
            <li>{trackClass}</li>
            <li>should be status here</li>
          </ul> */}
        {/* </li> */}
      </CarouselTrack>
    </Carousel>
  );
};

export default MainCarousel;
