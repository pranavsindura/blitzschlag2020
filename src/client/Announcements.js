import React, { Component } from "react";
import "./Announcements.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Splash from "./Splash";
import { Card } from "react-bootstrap";
export default class Announcements extends Component {
  state = {};
  images = ["https://i.ibb.co/X5qprfG/prasanna.jpg"];
  render() {
    return (
      <div>
        <Splash images={this.images} />
        <a href="http://www.blitzschlag.co.in/">
          <img
            style={{
              height: "auto",
              width: "70px",
              position: "fixed",
              left: "0%",
              top: "0%",
              zIndex: "1"
            }}
            src="https://i.ibb.co/42WZWbr/blitzlogo.png"
          />
        </a>
        <ReactFullpage
          scrollOverflow={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section" style={{ background: "#de5d54" }}>
                  <h1 className="ann-heading">ANNOUNCEMENTS & RESULTS</h1>
                  <br></br>
                  <br></br>
                  <Card className="ann-card">
                    <Card.Body style={{padding:'0px'}}>
                        <p style={{padding:'0px',margin:'0px'}}>The Online payments will stop at 12:00AM 5 March, 2020. You can still pay at the registeration desk at the main gate. Debit Cards, Cash etc. are the accepted mode of payments.</p>
                        <p style={{padding:'0px',fontSize:'0.8em',textAlign:'right', paddingRight:'2px'}}>09:00PM 30 Jan, 2020</p>
                    </Card.Body>
                  </Card>
                  <Card className="ann-card">
                    <Card.Body style={{padding:'0px'}}>
                        <p style={{padding:'0px',margin:'0px'}}>Payments are Live - You can now pay under the hospitality section.</p>
                        <p style={{padding:'0px',fontSize:'0.8em',textAlign:'right', paddingRight:'2px'}}>08:00PM 25 Jan, 2020</p>
                    </Card.Body>
                  </Card>
                  <Card className="ann-card">
                    <Card.Body style={{padding:'0px'}}>
                        <p style={{padding:'0px',margin:'0px'}}>WE ARE LIVE - Connections move the world around us today. If you're ready to enter the world that Blitzschlag 2020 brings you, connect with us at blitzschlag.co.in - we're live!</p>
                        <p style={{padding:'0px',fontSize:'0.8em',textAlign:'right', paddingRight:'2px'}}>12:00PM 20 Jan, 2020</p>
                    </Card.Body>
                  </Card>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}
