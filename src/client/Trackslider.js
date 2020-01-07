import React, { Component } from "react";
import Coverflow from "react-coverflow";
// import { StyleRoot } from "radium";
export default class TrackSlider extends Component {
  state = {};
  render() {
    return (
      <Coverflow
        media={{
          "@media (max-width: 900px)": {
            width: "100%",
            height: "200px"
          },
          "@media (min-width: 900px)": {
            width: "100%",
            height: "600px"
          }
        }}
        displayQuantityOfSide={1}
        navigation={false}
        enableHeading={false}
      >
        <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
          style={{ touchaction: 'none'}}
        ></div>
        
            <div style={{ display: "block", width: "100%", height: "50%"}} >
            <img
              src="src/shared/img/img3.png"
              alt="Album two"
              data-action="www.google.com"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
            <a href="https://www.youtube.com/" target='blank'><button>Sign In</button></a>
        </div>
        <a href="https://www.youtube.com/" target='blank'><div style={{ display: "block", width: "100%", height: "50%" }} >
            <img
              src="src/shared/img/img1.jpeg"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
        </div>
        </a>
        <a href="https://www.youtube.com/" target='blank'>
        <div style={{ display: "block", width: "100%", height: "50%" }} >
            <img
              src="src/shared/img/img3.jpeg"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
        </div>
        </a>
        <a href="https://www.youtube.com/" target='blank'>
        <div style={{ display: "block", width: "100%", height: "50%" }} >
            <img
              src="src/shared/img/img2.jpeg"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
        </div>
        </a>
        <a href="https://www.youtube.com/" target='blank'>
        <div style={{ display: "block", width: "100%", height: "50%" }} >
            <img
              src="src/shared/img/img1.jpeg"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
        </div>
        </a>
        <a href="https://www.youtube.com/" target='blank'>
        <div style={{ display: "block", width: "100%", height: "50%" }} >
            <img
              src="src/shared/img/img2.jpeg"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
        </div>
        </a>
      </Coverflow>
    );
  }
}
