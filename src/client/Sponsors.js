import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import "./Sponsors.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Splash from "./Splash";
export default class Sponsors extends Component {
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
                    Sponsors
                  </h1>
                  <div className="">
                    <div className="row">
                      <div className="col-md-4 p-0 m-0">
                        <Card className="car">
                          <CardImg
                            top
                            width="100%"
                            src="src/shared/img/sponsors/img1.png"
                            alt="Card image cap"
                          />
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="col-md-4 p-0 m-0">
                        <Card className="car">
                          <CardImg
                            top
                            width="100%"
                            src="src/shared/img/sponsors/img1.png"
                            alt="Card image cap"
                          />
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="col-md-4 p-0 m-0">
                        <Card className="car">
                          <CardImg
                            top
                            width="100%"
                            src="src/shared/img/sponsors/img1.png"
                            alt="Card image cap"
                          />
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 p-0 m-0">
                        <Card className="car">
                          <CardImg
                            top
                            width="100%"
                            src="src/shared/img/sponsors/img1.png"
                            alt="Card image cap"
                          />
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="col-md-4 p-0 m-0">
                        <Card className="car">
                          <CardImg
                            
                            width="100%"
                            src="src/shared/img/sponsors/img1.png"
                            alt="Card image cap"
                          />
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="col-md-4 p-0 m-0">
                        <Card className="car">
                          <CardImg
                            top
                            width="100%"
                            src="src/shared/img/sponsors/img1.png"
                            alt="Card image cap"
                          />
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
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
