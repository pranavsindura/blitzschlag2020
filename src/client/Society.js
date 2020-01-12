import React, { Component } from "react";
import "./Society.css";
// import ControlledCarousel from './EventCar.js';
import { Row, Col, Carousel } from "react-bootstrap";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Splash from "./Splash";
export default class Society extends Component {
  state = {};
  images = ["src/shared/img/car1.jpg"];
  renderEventSoc() {
    if (window.innerWidth > 760) {
      return (
        <div className="eve-cat-cont">
          <div className="head-eve">
            <div className="event-h">EVENTS</div>
          </div>
          <div className="cat1">
            <div className="cat1-child">
              <div className="child-1-head">
                L<br></br>I<br></br>T<br></br>E<br></br>R<br></br>A<br></br>R
                <br></br>Y
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/literary.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/literary">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#e57853" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat2">
            <div className="cat2-child">
              <div className="child-1-head">
                M<br></br>U<br></br>S<br></br>I<br></br>C<br></br> <br></br>D
                <br></br>A<br></br>N<br></br>C<br></br>E<br></br> <br></br>&
                <br></br>S<br></br>P<br></br>I<br></br>C<br></br> <br></br>M
                <br></br>A<br></br>C<br></br>A<br></br>Y
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/mds.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/mds">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#637952" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat3">
            <div className="cat3-child">
              <div className="child-1-head">
                E<br></br>D<br></br> <br></br>C<br></br>E<br></br>L<br></br>L
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/edcell.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/flagship">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#207f5f" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat4">
            <div className="cat4-child">
              <div className="child-1-head">
                M<br></br>A<br></br>V<br></br>E<br></br>R<br></br>I<br></br>C
                <br></br>K<br></br>S
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/maverics.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/flagship">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#026286" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat5">
            <div className="cat5-child">
              <div className="child-1-head">
                D<br></br>R<br></br>A<br></br>M<br></br>A<br></br>T<br></br>I
                <br></br>C<br></br>S
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/dil.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/flagship">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#fe6e81" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat6">
            <div className="cat6-child">
              <div className="child-1-head">
                F<br></br>I<br></br>N<br></br>E<br></br> <br></br>A<br></br>R
                <br></br>T<br></br>S
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/fnarts.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/finearts">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#f68827" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat7">
            <div className="cat7-child">
              <div className="child-1-head">
                F<br></br>I<br></br>L<br></br>M<br></br> <br></br>&<br></br>{" "}
                <br></br>P<br></br>H<br></br>O<br></br>T<br></br>O<br></br>G
                <br></br>R<br></br>A<br></br>P<br></br>H<br></br>Y
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/fnp.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/fnp">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#3a7472" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat8">
            <div className="cat8-child">
              <div className="child-1-head">
                S<br></br>O<br></br>C<br></br>I<br></br>E<br></br>T<br></br>Y
                <br></br> <br></br>E<br></br>V<br></br>E<br></br>N<br></br>T
                <br></br>S
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/fnarts.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/flagship">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#f74b53" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat9">
            <div className="cat9-child">
              <div className="child-1-head">
                F<br></br>L<br></br>A<br></br>G<br></br>S<br></br>H<br></br>I
                <br></br>P<br></br> <br></br>E<br></br>V<br></br>E<br></br>N
                <br></br>T<br></br>S
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/cacs.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/flagship">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#eb5a83" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat10">
            <div className="cat10-child">
              <div className="child-1-head">
                V<br></br>Y<br></br>A<br></br>K<br></br>T<br></br>I<br></br>V
                <br></br>A<br></br> <br></br>S<br></br>R<br></br>I<br></br>J
                <br></br>A<br></br>N
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/vss.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/flagship">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#a3286b" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="cat11">
            <div className="cat11-child">
              <div className="child-1-head">
                I<br></br>N<br></br>F<br></br>O<br></br>R<br></br>M<br></br>A
                <br></br>L<br></br> <br></br>E<br></br>V<br></br>E<br></br>N
                <br></br>T<br></br>S
              </div>
              <div className="main-cont-event">
                <img
                  src="src/shared/img/fnarts.png"
                  style={{ width: "16vw", heigth: "auto" }}
                  alt="logo"
                ></img>
                <div className="text-pc">
                  <br></br>
                  Programming online is not different from programming on your
                  system, except a few points. We’ll be learning that here.
                  Happy coding :) Let's start with a basic program to get you
                  onboarded on HackerEarth. Write a program to print your name
                  as output. Instructions: We have already written the correct
                  code for this problem in the code editor.
                </div>
                <div className="link-pc-to-cat">
                  <Link to="/events/flagship">
                    <Button
                      style={{ backgroundColor: "#f1e5d6", color: "#a43a4d" }}
                    >
                      EXPLORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="eve-mob">
          <svg
            width="100%"
            height="2400.000000pt"
            // viewBox="0 0 380.000000 2465.000000"
            className="svg-mob"
          >
            <g
              transform="translate(0.000000,2400.000000) scale(0.1,-0.125)"
              fill="#ef833d"
              stroke="white"
            >
              <path
                d="M3210 19774 c-437 -18 -824 -33 -859 -33 -35 -1 -61 -4 -58 -8 4 -4
40 -15 80 -25 39 -10 115 -39 167 -64 77 -39 109 -62 175 -128 66 -66 90 -99
127 -176 59 -120 81 -203 80 -305 -4 -264 -170 -487 -447 -599 -33 -13 -373
-103 -755 -201 -590 -150 -709 -183 -785 -219 -163 -78 -270 -178 -341 -318
-52 -103 -67 -181 -61 -323 3 -103 8 -132 35 -203 79 -211 234 -354 457 -421
39 -12 363 -73 722 -136 703 -123 746 -134 869 -215 183 -119 316 -355 317
-560 1 -276 -171 -508 -457 -615 -35 -13 -374 -103 -753 -199 -637 -163 -695
-179 -788 -225 -261 -130 -395 -333 -395 -602 0 -213 96 -417 253 -534 148
-112 176 -119 926 -251 361 -63 685 -124 721 -135 247 -79 427 -267 490 -515
78 -305 -102 -617 -430 -743 -41 -16 -385 -108 -765 -205 -646 -165 -697 -179
-793 -227 -78 -39 -121 -68 -182 -126 -92 -86 -137 -156 -176 -268 -24 -69
-28 -96 -28 -200 -1 -99 3 -133 22 -195 75 -239 245 -405 483 -469 41 -11 358
-70 704 -131 347 -61 659 -120 695 -131 118 -39 199 -88 286 -174 130 -128
201 -281 211 -450 15 -272 -149 -509 -437 -630 -32 -13 -350 -99 -706 -189
-357 -91 -680 -175 -719 -187 -93 -28 -228 -98 -294 -153 -186 -153 -273 -395
-226 -627 51 -256 200 -430 444 -519 60 -22 242 -58 713 -140 348 -61 666
-120 707 -131 200 -54 357 -180 451 -361 199 -382 8 -789 -435 -927 -38 -12
-368 -98 -732 -191 -559 -142 -674 -174 -745 -209 -267 -132 -400 -334 -402
-611 -1 -186 64 -340 199 -475 84 -85 165 -135 280 -173 33 -11 346 -71 695
-132 349 -61 662 -118 695 -126 33 -8 103 -36 155 -62 286 -139 448 -486 361
-772 -54 -178 -176 -314 -365 -405 -105 -50 -151 -64 -805 -230 -382 -97 -720
-187 -752 -200 -103 -44 -183 -97 -260 -174 -126 -126 -177 -243 -186 -421 -6
-127 10 -215 61 -324 77 -167 194 -276 378 -349 69 -28 104 -35 998 -193 789
-139 1083 -183 1695 -254 143 -16 277 -32 298 -35 l37 -5 0 9785 0 9785 -27
-1 c-16 -1 -386 -16 -823 -35z"
              />
            </g>
          </svg>
          <div className="head-mob-eve">EVENTS</div>
          <div className="cat1-mob">
            <img
              className="eve-img-mob"
              src="src/shared/img/literary.png"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                right: "50vw",
                top: "75px"
              }}
              alt="logo"
            ></img>
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "52vw",
                marginRight: "5vw",
                marginTop: "25px"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Literary
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
          </div>
          <div className="cat2-mob">
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "5vw",
                marginTop: "25px",
                marginRight: "52vw"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Music, Dance & Spic Macay
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
            <img
              src="src/shared/img/mds.png"
              className="eve-img-mob"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                top: "75px",
                left: "45vw"
              }}
              alt="logo"
            ></img>
          </div>
          <div className="cat3-mob">
            <img
              className="eve-img-mob"
              src="src/shared/img/edcell.png"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                right: "50vw",
                top: "75px"
              }}
              alt="logo"
            ></img>
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "52vw",
                marginRight: "5vw",
                marginTop: "25px"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                ED Cell
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
          </div>
          <div className="cat4-mob">
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "5vw",
                marginTop: "25px",
                marginRight: "52vw"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Maverics
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
            <img
              src="src/shared/img/maverics.png"
              className="eve-img-mob"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                top: "75px",
                left: "45vw"
              }}
              alt="logo"
            ></img>
          </div>
          <div className="cat5-mob">
            <img
              src="src/shared/img/dil.png"
              className="eve-img-mob"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                right: "50vw",
                top: "75px"
              }}
              alt="logo"
            ></img>
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "52vw",
                marginRight: "5vw",
                marginTop: "25px"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Dramatics
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
          </div>
          <div className="cat6-mob">
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "5vw",
                marginTop: "25px",
                marginRight: "52vw"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Fine Arts
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
            <img
              src="src/shared/img/fnarts.png"
              className="eve-img-mob"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                top: "75px",
                left: "45vw"
              }}
              alt="logo"
            ></img>
          </div>
          <div className="cat7-mob">
            <img
              className="eve-img-mob"
              src="src/shared/img/fnp.png"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                right: "50vw",
                top: "75px"
              }}
              alt="logo"
            ></img>
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "52vw",
                marginRight: "5vw",
                marginTop: "25px"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Film & Photography
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
          </div>
          <div className="cat8-mob">
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "5vw",
                marginTop: "25px",
                marginRight: "52vw"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Society Events
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
            <img
              src="src/shared/img/mds.png"
              className="eve-img-mob"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                top: "75px",
                left: "45vw"
              }}
              alt="logo"
            ></img>
          </div>
          <div className="cat9-mob">
            <img
              src="src/shared/img/cacs.png"
              className="eve-img-mob"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                right: "50vw",
                top: "75px"
              }}
              alt="logo"
            ></img>
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "52vw",
                marginRight: "5vw",
                marginTop: "25px"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Flagship Events
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
          </div>
          <div className="cat10-mob">
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "5vw",
                marginTop: "25px",
                marginRight: "52vw"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Vyaktitva Srijan
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
            <img
              className="eve-img-mob"
              src="src/shared/img/vss.png"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                top: "75px",
                left: "45vw"
              }}
              alt="logo"
            ></img>
          </div>
          <div className="cat11-mob">
            <img
              className="eve-img-mob"
              src="src/shared/img/mds.png"
              style={{
                position: "absolute",
                heigth: "auto",
                width: "100px",
                right: "50vw",
                top: "75px"
              }}
              alt="logo"
            ></img>
            <div
              className="eve-text-mob"
              style={{
                position: "absolute",
                heigth: "200px",
                width: "40vw",
                marginLeft: "52vw",
                marginRight: "5vw",
                marginTop: "25px"
              }}
            >
              <p style={{ margin: "0px", fontSize: "1em", fontWeight: "bold" }}>
                Informal Events
              </p>
              Some words describing the given society. aur jankaari ke liye
              neeche gaye button par click kare. neeche koi button hi nahi hai.
              oh I am so smart. Button chodo hum pooore div to hi link kar
              denge. yes good idea.
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Splash images={this.images} />
        <ReactFullpage
          verticalCentered={false}
          scrollOverflow={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section content">
                  <div>{this.renderEventSoc()}</div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}
