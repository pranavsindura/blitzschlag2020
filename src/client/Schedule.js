import React, { Component } from "react";
import "./Schedule.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Splash from "./Splash";
import { Link } from "react-router-dom";
import {
  Form,
  Col,
  Card,
  Table,
  Button,
  Row,
  Tabs,
  Tab
} from "react-bootstrap";
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
                <div className="section" style={{ background: "#a6db7b" }}>
                  <h1 className="sche-heading heading">SCHEDULE</h1>
                  <br></br>
                  <div className="mai-sche">
                    <Tabs defaultActiveKey="day1" id="uncontrolled-tab-example">
                      <Tab eventKey="day1" title="DAY 1">
                        <Card className="sche-card">
                          <Card.Body>
                            <Table bordered hover responsive size="sm">
                              <thead className="sche">
                                <tr>
                                  <th colSpan="3" style={{ fontSize: "1.5em" }}>
                                    DAY 1: 6TH FEB 2020
                                  </th>
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
                                  <td>VLTC L007</td>
                                </tr>
                                <tr>
                                  <td>IPL AUCTION (ROUND 1)</td>
                                  <td>3:30 – 5:00</td>
                                  <td>VLTC L008</td>
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
                      </Tab>
                      <Tab eventKey="day2" title="DAY 2">
                        <Card className="sche-card">
                          <Card.Body>
                            <Table bordered hover responsive size="sm">
                              <thead className="sche">
                                <tr>
                                  <th colSpan="3" style={{ fontSize: "1.5em" }}>
                                    Day 2: 7th Feb 2020
                                  </th>
                                </tr>
                                <tr>
                                  <th>EVENT NAME</th>
                                  <th>TIME</th>
                                  <th>VENUE</th>
                                </tr>
                              </thead>
                              <tbody className="sche">
                                <tr>
                                  <td>RAMBA SAMBA PRELIMS</td>
                                  <td>9:00 – 1:00</td>
                                  <td>SAC</td>
                                </tr>
                                <tr>
                                  <td>MOMENTS’20</td>
                                  <td>9:00 – 5:00</td>
                                  <td>VLTC (NEAR GYM)</td>
                                </tr>
                                <tr>
                                  <td>JAM</td>
                                  <td>9:30 – 11:30</td>
                                  <td>VLTC L006</td>
                                </tr>
                                <tr>
                                  <td>THE QUIZONER OF AZKABAN (ROUND 2)</td>
                                  <td>9:30 – 11:00</td>
                                  <td>VLTC L009</td>
                                </tr>
                                <tr>
                                  <td>MR. AND MISS BLITZ</td>
                                  <td>10:00 – 5:00</td>
                                  <td>VLTC’S FOOD COURT</td>
                                </tr>
                                <tr>
                                  <td>PHOTOGRAPHY WORKSHOP</td>
                                  <td>10:00 – 5:00</td>
                                  <td>VLTC L007</td>
                                </tr>
                                <tr>
                                  <td>ART EXHIBITION</td>
                                  <td>10:00 – 5:00</td>
                                  <td>VLTC L104 , L106</td>
                                </tr>
                                <tr>
                                  <td>LEGGO TRANCE</td>
                                  <td>10:00 –11:30</td>
                                  <td>VLTC</td>
                                </tr>
                                <tr>
                                  <td>START UP NIVESH</td>
                                  <td>10:00 – 3:00</td>
                                  <td>VLTC L107 , L108</td>
                                </tr>
                                <tr>
                                  <td>ACTA DIURNA (FORTH STATE)</td>
                                  <td>10:30 – 3:00</td>
                                  <td>VLTC L008</td>
                                </tr>
                                <tr>
                                  <td>HINDI KAVYAPATH</td>
                                  <td>11:00 – 1:00</td>
                                  <td>VLTC L003</td>
                                </tr>
                                <tr>
                                  <td>MOTIF - FILION</td>
                                  <td>12:00 – 1:30</td>
                                  <td>VLTC</td>
                                </tr>
                                <tr>
                                  <td>BOX OFFICE (ROUND 2)</td>
                                  <td>12:00 – 1:30</td>
                                  <td>VLTC L009</td>
                                </tr>
                                <tr>
                                  <td>RANGBHOOMI</td>
                                  <td>11:00 – 5:00</td>
                                  <td>MINI AUDITORIUM</td>
                                </tr>
                                <tr>
                                  <td>QUESTIVAL</td>
                                  <td>1:00 - 3:00</td>
                                  <td>VLTC L006</td>
                                </tr>
                                <tr>
                                  <td>ESCAPE ROOM</td>
                                  <td>1:00 – 5:00</td>
                                  <td>VLTC T001 , T002</td>
                                </tr>
                                <tr>
                                  <td>MHARE DESH QUIZ</td>
                                  <td>1:00 – 4:30</td>
                                  <td>VLTC L109</td>
                                </tr>
                                <tr>
                                  <td>BLITZ GOT TALENT</td>
                                  <td>2:00 – 5:00</td>
                                  <td>SAC FOOD COURT</td>
                                </tr>
                                <tr>
                                  <td>TINT A TOP</td>
                                  <td>3:00 – 5:00</td>
                                  <td>VLTC</td>
                                </tr>
                                <tr>
                                  <td>DHUN</td>
                                  <td>2:00 – 4:00</td>
                                  <td>OAT</td>
                                </tr>
                                <tr>
                                  <td>PUZZLERIA</td>
                                  <td>3:00 – 5:00</td>
                                  <td>VLTC L006</td>
                                </tr>
                                <tr>
                                  <td>IPL AUCTION (ROUND 2)</td>
                                  <td>3:30 – 5:00</td>
                                  <td>VLTC L009</td>
                                </tr>
                                <tr>
                                  <td>RAMBA SAMBA FINALE</td>
                                  <td>5:00 – 7:30</td>
                                  <td>SAC</td>
                                </tr>
                                <tr>
                                  <td>PRONITE II: RAP BATTLE</td>
                                  <td>7:30 – 10:00</td>
                                  <td>SAC</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Card>
                      </Tab>
                      <Tab eventKey="day3" title="DAY 3">
                        <Card className="sche-card">
                          <Card.Body>
                            <Table bordered hover responsive size="sm">
                              <thead className="sche">
                                <tr>
                                  <th colSpan="3" style={{ fontSize: "1.5em" }}>
                                    Day 3: 8th Feb 2020
                                  </th>
                                </tr>
                                <tr>
                                  <th>EVENT NAME</th>
                                  <th>TIME</th>
                                  <th>VENUE</th>
                                </tr>
                              </thead>
                              <tbody className="sche">
                                <tr>
                                  <td>MOMENTS’20</td>
                                  <td>9:00 – 4:00</td>
                                  <td>VLTC (NEAR GYM)</td>
                                </tr>
                                <tr>
                                  <td>RANG DE MUKHRA</td>
                                  <td>10:00 – 12:00</td>
                                  <td>VLTC</td>
                                </tr>
                                <tr>
                                  <td>BLITZ GOT TALENT</td>
                                  <td>10:00 – 4:00</td>
                                  <td>VLTC FOOD COURT</td>
                                </tr>
                                <tr>
                                  <td>BREAK FREE</td>
                                  <td>10:00 – 1:00</td>
                                  <td>OAT</td>
                                </tr>
                                <tr>
                                  <td>GYANVAAN (ROUND 1)</td>
                                  <td>10:00 – 12:00</td>
                                  <td>VLTC L006</td>
                                </tr>
                                <tr>
                                  <td>QUESTIVAL (ROUND 3)</td>
                                  <td>10:00 – 12:00</td>
                                  <td>VLTC L007</td>
                                </tr>
                                <tr>
                                  <td>ASPIRE QUIZ</td>
                                  <td>11:00 – 2:00</td>
                                  <td>VLTC L008</td>
                                </tr>
                                <tr>
                                  <td>ANDHADHUN</td>
                                  <td>10:00 –4:00</td>
                                  <td>CENTRAL LAWN</td>
                                </tr>
                                <tr>
                                  <td>MNIT FILM FESTIVAL</td>
                                  <td>10:00 – 4:00</td>
                                  <td>NITI SABHAGHAR</td>
                                </tr>
                                <tr>
                                  <td>ART EXHIBITION</td>
                                  <td>10:00 – 4:00</td>
                                  <td>VLTC L104 , L106</td>
                                </tr>
                                <tr>
                                  <td>GYANVAAN (ROUND 2)</td>
                                  <td>2:30 – 4:30</td>
                                  <td>VLTC L006</td>
                                </tr>
                                <tr>
                                  <td>GRAFFITO</td>
                                  <td>12:00 – 2:00</td>
                                  <td>VLTC</td>
                                </tr>
                                <tr>
                                  <td>ADHOORE JAZBAAT</td>
                                  <td>11:00 – 1:00</td>
                                  <td>VLTC L107</td>
                                </tr>
                                <tr>
                                  <td>ESCAPE ROOM</td>
                                  <td>12:00 – 4:00</td>
                                  <td>VLTC T001 , T002</td>
                                </tr>
                                <tr>
                                  <td>MOVIE SCREENING</td>
                                  <td>12:30 - 4:00</td>
                                  <td>MINI AUDI</td>
                                </tr>
                                <tr>
                                  <td>QUESTIVAL (ROUND 4)</td>
                                  <td>1:30 – 4:00</td>
                                  <td>VLTC 007</td>
                                </tr>
                                <tr>
                                  <td>VISUALITY</td>
                                  <td>2:30 – 5:00</td>
                                  <td>VLTC</td>
                                </tr>
                                <tr>
                                  <td>HIT THE STREET</td>
                                  <td>3:30 – 5:00</td>
                                  <td>SAC</td>
                                </tr>
                                <tr>
                                  <td>PRONITE III: ANKIT TIWARI LIVE</td>
                                  <td>7:00 – 10:00</td>
                                  <td>SAC</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Card>
                      </Tab>
                    </Tabs>
                  </div>
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
