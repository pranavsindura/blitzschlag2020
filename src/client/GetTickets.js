import React, { Component } from "react";
import "./GetTickets.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Splash from "./Splash";
export default class GetTickets extends Component {
  state = {};
  images = [
    "https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg"
  ];
  render() {
    return (
      <div>
        <Splash images={this.images} />
        <ReactFullpage
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <h1
                    style={{
                      position: "absolute",
                      zIndex: "2",
                      backgroundColor: "black",
                      color: "black",
                      width: "100%",
                      margin: "0",
                      padding: "10px"
                    }}
                  >
                    .
                  </h1>
                  <h1
                    style={{
                      position: "absolute",
                      zIndex: "3",
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "10px"
                    }}
                  >
                    Get Tickets
                  </h1>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}
