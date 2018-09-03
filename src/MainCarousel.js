import React, { Component } from "react";
import "./carousel.css";

class MainCarousel extends Component {
  state = {
    viewState: "test",
    trackClass: ""
  };

  moveToSlide = event => {
    event.preventDefault();
    console.log("moving to slide....");
    const num = event.target.dataset.slide;
    const trackClass = `carousel__track carousel__track slide${num}`;

    this.setState({ trackClass: trackClass });

    ///
  };
  render() {
    return (
      <div className="carousel-container">
        <h2>slider</h2>
        <div className="js-controls">
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
          </a>
          <a
            onClick={this.moveToSlide}
            className="js-select"
            data-slide="5"
            href="#well then"
          >
            slide 5
          </a>
        </div>
        <div className="carousel my-carousel carousel--translate">
          <div className={this.state.trackClass}>
            <li className="carousel__slide">
              <ul className="testinglist">
                <li>hello there</li>
                <li className="wllwewe ">testing</li>
                <li className="wllwewe ">this is a list</li>
                <li className="wllwewe ">pretty cool</li>
                <li className="wllwewe " />
              </ul>
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
              <h1>I</h1>
            </li>
            <li className="carousel__slide ">
              <h1>J</h1>
            </li>
          </div>
          <div className="carousel__indicators ">
            <label className="carousel__indicator " for="F " />
            <label className="carousel__indicator " for="G " />
            <label className="carousel__indicator " for="H " />
            <label className="carousel__indicator " for="I " />
            <label className="carousel__indicator " for="J " />
          </div>
        </div>
      </div>
    );
  }
}

export default MainCarousel;
