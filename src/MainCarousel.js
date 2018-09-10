import React from "react";
import "./carousel.css";
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
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  transition: transform 0.5s ease 0s; */
`;

const MainCarousel = ({ viewState }) => {
  const trackClass = `carousel__track  slide${viewState}`;

  return (
    <Carousel>
      <div className={trackClass}>
        <li className="carousel__slide ">
          {trackClass}
          {/* <ul className="testinglist">
            {trackClass}
            <li>this is the camera</li>
          </ul> */}
        </li>

        <li className="carousel__slide ">
          <ChatList />
        </li>
        <li className="carousel__slide ">
          {trackClass}
          {/* <ul className="testinglist">
            <li>{trackClass}</li>
            <li>should be status here</li>
          </ul> */}
        </li>
        <li className="carousel__slide ">
          {trackClass}
          {/* <ul className="testinglist">
            <li>{trackClass}</li>
            <li>should be status here</li>
          </ul> */}
        </li>
      </div>
    </Carousel>
  );
};

export default MainCarousel;
