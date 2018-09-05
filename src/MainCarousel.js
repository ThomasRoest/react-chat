import React, { Component } from "react";
import "./carousel.css";
import ChatList from "./ChatList";

class MainCarousel extends Component {
  // state = {
  //   trackClass: "carousel__track carousel__track slide1"
  // };

  // moveToSlide = event => {
  //   event.preventDefault();
  //   console.log("moving to slide....");
  //   // const num = event.target.dataset.slide;
  //   // add to redux here?
  //   console.log;
  //   const trackClass = `carousel__track carousel__track slide${
  //     this.props.viewState
  //   }`;

  //   this.setState({ trackClass: trackClass });

  //   ///
  // };
  render() {
    const { viewState } = this.props;
    const trackClass = `carousel__track carousel__track slide${viewState}`;

    return (
      <div className="carousel-container">
        {/* <div className="js-controls">
          {this.props.viewState}
          <a
            onClick={this.moveToSlide}
            className="js-select"
            data-slide="1"
            href="#well then"
          >
            slide 1
          </a>
          <a
            onClick={this.moveToSlide}
            className="js-select"
            data-slide="2"
            href="#well then"
          >
            slide 2
          </a>
          <a
            onClick={this.moveToSlide}
            className="js-select"
            data-slide="3"
            href="#well then"
          >
            slide 3
          </a>
          <a
            onClick={this.moveToSlide}
            className="js-select"
            data-slide="4"
            href="#well then"
          >
            slide 4
          </a> */}
        {/* </div> */}
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
  }
}

export default MainCarousel;
