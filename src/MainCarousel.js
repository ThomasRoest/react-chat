import React from "react";
import "./carousel.css";
import ChatList from "./ChatList";

const MainCarousel = ({ viewState }) => {
  const trackClass = `carousel__track carousel__track slide${viewState}`;

  return (
    <div className="carousel-container">
      <div className="carousel my-carousel carousel--translate">
        <div className={trackClass}>
          <li className="carousel__slide">
            <ChatList />
          </li>
          <li className="carousel__slide ">
            <h1>G</h1>
          </li>
          <li className="carousel__slide ">
            <ul className="testinglist">
              <li className=" wllwewe ">hello there</li>
              <li className="wllwewe ">testing</li>
              <li className="wllwewe ">this is a list</li>
              <li className="wllwewe ">pretty cool</li>
              <li className="wllwewe " />
            </ul>
          </li>
          <li className="carousel__slide ">
            <ChatList />
          </li>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
