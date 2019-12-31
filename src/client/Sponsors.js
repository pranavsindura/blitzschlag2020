import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  CardGroup
} from "reactstrap";
import "./Sponsors.css";
import { SPONSOR } from "./SponsorsData.js";
import ReactFullpage from "@fullpage/react-fullpage";
import Splash from "./Splash";
export default class Sponsors extends Component {
  state = {
    sponsors: SPONSOR
  };
  images = [
    "https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg"
  ];
  renderData(sponsors) {
    return (
      <Row xs="2" sm="3" md="5">
        {sponsors.map(sponsor => {
          return (
            <Col key={sponsor.id} className="contcol">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="contimg"
              ></img>
            </Col>
          );
        })}
      </Row>
    );
  }
  render() {
    return (
      <div>
        <Splash images={this.images} />
        <ReactFullpage
          // scrollOverflow={true}
          // responsiveHeight={1080}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section ">
                    <div className="container-fluid cont">
                      <h1>Sponsors</h1>
                      <br></br>
                      <br></br>
                      <div className="container">
                        {this.renderData(this.state.sponsors)}
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}
