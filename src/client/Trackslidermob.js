import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import disableScroll from "disable-scroll";
export default class TrackSliderMob extends Component {
  state = {};
  render() {
    return (
      <Coverflow
        className="eventcover"
        enableScroll = {false}
        media={{
          "@media (max-width: 600px)": {
            width: "100%",
            height: "100vw"
          },
          "@media (min-width: 600px)": {
            width: "100%",
            height: "60vw"
          },
          "@media (min-width: 900px)": {
            width: "100%",
            height: "50vw"
          },
          "@media (min-width: 1200px)": {
            width: "100%",
            height: "40vw"
          }
        }}
        displayQuantityOfSide={1}
        navigation={false}
        enableHeading={false}
      >
        <div
          // onClick={() => fn()}
          // onKeyDown={() => fn()}
        >
          <img
            src="src/shared/img/litmob.png"
            alt="Album two"
            data-action="http://passer.cc"
            style={{ display: "block", width: "100%", height: "50vw" }}
          />
        </div>
        <div>
          <img
            src="src/shared/img/dramob.png"
            alt="Album two"
            data-action="www.google.com"
            style={{ display: "block", width: "100%", height: "50vw" }}
          />
        </div>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              src="src/shared/img/finmob.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "50vw" }}
            />
          </div>
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              src="src/shared/img/culmob.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "50vw" }}

            />
          </div>
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              src="src/shared/img/gammob.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "50vw" }}
            />
          </div>
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              src="src/shared/img/musmob.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "50vw" }}
            />
          </div>
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              src="src/shared/img/phomob.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "50vw" }}
            />
          </div>
        </a>
      </Coverflow>
    );
  }
}
