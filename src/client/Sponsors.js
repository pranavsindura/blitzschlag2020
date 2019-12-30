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
  renderData(sponsors) {
    return (
      <Row xs="1" sm="2" md="3">
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
          scrollOverflow={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <h1>Sponsors</h1>
                  <br></br>
                  <br></br>
                  <div className="container cont">
                    {this.renderData(this.state.sponsors)}
                  </div>
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
