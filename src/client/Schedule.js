import React, { Component } from "react";
import "./Schedule.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Splash from "./Splash";
import { Link } from "react-router-dom";
import { Form, Col, Card, Table, Button, Row } from "react-bootstrap";
export default class Schedule extends Component {
  state = {};
  images = [
    "https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg"
  ];
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
          verticalCentered={false}
          scrollOverflow={true}
          scrollOverflowOptions={{
            click: false,
            preventDefaultException: { tagName: /.*/ }
          }}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section" style={{ background: "#1d826f" }}>
                  <h1 className="sche-heading heading">SCHEDULE</h1>
                  <Card className="sche-card">
                    <Card.Body>
                      <Table bordered hover responsive size="sm">
                        <thead className="sche">
                          <tr>
                            <th colSpan="3">DAY 1: 6TH FEB 2020</th>
                          </tr>
                          <tr>
                            <th>EVENT NAME</th>
                            <th>TIME</th>
                            <th>VENUE</th>
                          </tr>
                        </thead>
                        <tbody className="sche">
                          <tr>
                            <td>INAUGRATION</td>
                            <td>9:00 – 12:00</td>
                            <td>OAT</td>
                          </tr>
                          <tr>
                            <td>BATTLE OF BANDS</td>
                            <td>9:00 – 5:00</td>
                            <td>VLTC’S FOOD COURT</td>
                          </tr>
                          <tr>
                            <td>VOICE CHOICE PRELIMS</td>
                            <td>9:00 – 12:00</td>
                            <td>SAC</td>
                          </tr>
                          <tr>
                            <td>MOMENTS'20</td>
                            <td>9:00 – 5:00</td>
                            <td>VLTC (NEAR GYM)</td>
                          </tr>
                          <tr>
                            <td>FAR APART ART</td>
                            <td>9:30 – 11:00</td>
                            <td>VLTC</td>
                          </tr>
                          <tr>
                            <td>MR. AND MISS BLITZ REGISTRATION</td>
                            <td>10:00 – 2:00</td>
                            <td>VLTC</td>
                          </tr>
                          <tr>
                            <td>QUESTIVAL (ROUND 1)</td>
                            <td>10:00 – 12:00</td>
                            <td>VLTC L006</td>
                          </tr>
                          <tr>
                            <td>BOX OFFICE (ROUND 1)</td>
                            <td>10:00 –11:00</td>
                            <td>VLTC L009</td>
                          </tr>
                          <tr>
                            <td>ART EXHIBITION</td>
                            <td>10:00 – 5:00</td>
                            <td>VLTC L104 , L106</td>
                          </tr>
                          <tr>
                            <td>THE QUIZONER OF AZKABAN (ROUND 1)</td>
                            <td>11:00 – 12:00</td>
                            <td>VLTC L007</td>
                          </tr>
                          <tr>
                            <td>TAMASHA</td>
                            <td>11:00 – 5:00</td>
                            <td>KABBADI GROUND</td>
                          </tr>
                          <tr>
                            <td>.COM</td>
                            <td>11:30 – 2:00</td>
                            <td>VLTC</td>
                          </tr>
                          <tr>
                            <td>NRITYANJALI</td>
                            <td>1:00 – 3:00</td>
                            <td>OAT</td>
                          </tr>
                          <tr>
                            <td>BOLTI TASVIRE</td>
                            <td>1:00 – 3:00</td>
                            <td>VLTC L008</td>
                          </tr>
                          <tr>
                            <td>ESCAPE ROOM</td>
                            <td>1:00 - 5:00</td>
                            <td>VLTC T001 , T002</td>
                          </tr>
                          <tr>
                            <td>JENGA SE JAWAAB</td>
                            <td>2:00 – 3:30</td>
                            <td>VLTC 006</td>
                          </tr>
                          <tr>
                            <td>MR. AND MISS BLITZ</td>
                            <td>3:00 – 5:00</td>
                            <td>SAC FOOD COURT</td>
                          </tr>
                          <tr>
                            <td>INVITED LECTURE CUM CLASHING VIEWS</td>
                            <td>2:00 – 5:00</td>
                            <td>MINI AUDI</td>
                          </tr>
                          <tr>
                            <td>TRASHION</td>
                            <td>2:00 – 5:00</td>
                            <td>VLTC</td>
                          </tr>
                          <tr>
                            <td>VOICE CHOICE FINALE</td>
                            <td>3:00 – 5:00</td>
                            <td>OAT</td>
                          </tr>
                          <tr>
                            <td>EK BAAR KI BAAT HAI</td>
                            <td>3:30 – 5:00</td>
                            <td>VLTC 
L007</td>
                          </tr>
                          <tr>
                            <td>IPL AUCTION 
(ROUND 1)</td>
                            <td>3:30 – 5:00</td>
                            <td>VLTC 
L008</td>
                          </tr>
                          <tr>
                            <td>PANACHE</td>
                            <td>5:00 – 7:30</td>
                            <td>SAC</td>
                          </tr>
						  <tr>
                            <td>PRONITE I : EDM NIGHT</td>
                            <td>7:30 – 10:00</td>
                            <td>SAC</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
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
