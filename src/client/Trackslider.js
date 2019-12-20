import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import disableScroll from "disable-scroll";
export default class TrackSlider extends Component {
  render() {
    return (
      <Coverflow
        enableScroll={false}
        media={{
          "@media (min-width: 10px)": {
            width: "100%",
            height: "150vw"
          },
          "@media (min-width: 300px)": {
            width: "100%",
            height: "125vw"
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
            className="img-responsive"
            src="src/shared/img/lit.png"
            alt="Album two"
            data-action="http://passer.cc"
            style={{ display: "block", width: "100%", height: "100%" }}
          />

          <div className="carousel-caption">
            <h3>Literary</h3>
            <br></br>
            <br></br>
          </div>
        </div>
        <div>
          <img
            className="img-responsive"
            src="src/shared/img/dra.png"
            alt="Album two"
            data-action="www.google.com"
            style={{ display: "block", width: "100%", height: "100%" }}
            media={{
              "@media (min-width: 10px)": {
                width: "100%",
                height: "150vw"
              }
            }}
          />
          <div className="carousel-caption">
            <h3>Dramatics</h3>
            <br></br>
            <br></br>
          </div>
        </div>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/fin.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
            <div className="carousel-caption">
              <h3>Fine-Arts</h3>
              <br></br>
              <br></br>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/cul.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
            <div className="carousel-caption">
              <h3>Cultural</h3>
              <br></br>
              <br></br>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/gam.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
            <div className="carousel-caption">
              <h3>Lan Gaming</h3>
              <br></br>
              <br></br>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/mus.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
            <div className="carousel-caption">
              <h3>Music</h3>
              <br></br>
              <br></br>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/pho.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
            <div className="carousel-caption">
              <h3>Film & Photography</h3>
              <br></br>
            </div>
          </div>
        </a>
      </Coverflow>
    );
  }
}
