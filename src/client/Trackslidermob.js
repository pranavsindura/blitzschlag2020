import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import disableScroll from "disable-scroll";
import { Link } from "react-router-dom";

export default class TrackSlider extends Component {
  state = {};
  render() {
    return (
      <Coverflow
        className="eventcover"
        enableScroll={false}
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
            className="img-responsive"
            src="src/shared/img/lit.png"
            alt="Album two"
            data-action="http://passer.cc"
            style={{
              display: "block",
              width: "100%",
              height: "50vw",
              objectFit: "cover"
            }}
          />
          <div className="carousel-caption">
          <Link to="events/category">
            <button type="button" className="btn btn-outline-light">
              Literary
            </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="img-responsive"
            src="src/shared/img/dra.png"
            alt="Album two"
            data-action="www.google.com"
            style={{
              display: "block",
              width: "100%",
              height: "50vw",
              objectFit: "cover"
            }}
          />
          <div className="carousel-caption">
          <Link to="events/category">
            <button type="button" className="btn btn-outline-light">
              Dramatics
            </button>
          </Link>
          </div>
        </div>
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/fin.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{
                display: "block",
                width: "100%",
                height: "50vw",
                objectFit: "cover"
              }}
            />
            <div className="carousel-caption">
            <Link to="events/category">
              <button type="button" className="btn btn-outline-light">
                Fine-Arts
              </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/cul.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{
                display: "block",
                width: "100%",
                height: "50vw",
                objectFit: "cover"
              }}
            />
            <div className="carousel-caption">
            <Link to="events/category">
              <button type="button" className="btn btn-outline-light">
                Cultural
              </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/gam.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{
                display: "block",
                width: "100%",
                height: "50vw",
                objectFit: "cover"
              }}
            />
            <div className="carousel-caption">
            <Link to="events/category">
              <button type="button" className="btn btn-outline-light">
                LAN Gaming
              </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/mus.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{
                display: "block",
                width: "100%",
                height: "50vw",
                objectFit: "cover"
              }}
            />
            <div className="carousel-caption">
            <Link to="events/category">
              <button type="button" className="btn btn-outline-light">
                Music
              </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="img-responsive"
              src="src/shared/img/pho.png"
              alt="Album two"
              data-action="http://passer.cc"
              style={{
                display: "block",
                width: "100%",
                height: "50vw",
                objectFit: "cover"
              }}
            />
            <div className="carousel-caption">
            <Link to="events/category">
              <button type="button" className="btn btn-outline-light">
                Film & Photography
              </button>
              </Link>
            </div>
          </div>
      </Coverflow>
    );
  }
}
