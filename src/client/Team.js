import React, { Component } from "react";
import "./Team.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Splash from "./Splash";
import "@fortawesome/fontawesome-free/css/all.css";
export default class Team extends Component {
  state = {};
  images = [
    "https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg"
  ];
  renderMember(imgsrc, phone, insta, faceb, linkedin) {
    return (
      <div className="base">
        <img
          className="imgteam"
          src={imgsrc}
          style={{ position: "absolute" }}
        ></img>
        <div className="derived1"></div>
        <div className="derived2"></div>
        <div className="derived-content">
          <p className="main-content-team">
            <i className="fas fa-phone-square-alt"></i>{" "}
            <span style={{ fontSize: "17px" }}>{phone}</span> <br></br>
            <a href={insta}>
              <i style={{ color: "black" }} className="fab fa-instagram"></i>
            </a>{" "}
            <a className="icon-team" href={faceb}>
              <i
                style={{ color: "black" }}
                className="fab fa-facebook-square"
              ></i>
            </a>{" "}
            <a className="icon-team" href={linkedin}>
              <i style={{ color: "black" }} className="fab fa-linkedin"></i>
            </a>
          </p>
        </div>
      </div>
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
                  <div className="container team-cont">
                    <br></br>
                    <br></br>
                    <h2 style={{ textAlign: "center", color: "white" }}>
                      TEAM BLITZSCHLAG
                    </h2>
                    <br></br>
                    <br></br>
                    <div className="row ">
                      <div className="col-12 singlecont">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/varun.jpg",
                            "9452174085",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Varun Kumar Verma
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            Advisor
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-12 singlecont">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/anuj.jpg",
                            "7525926870",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Anuj Srivastava
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            President
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-6 doublecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/divyaman.jpg",
                            "8963052212",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Divyaman
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            Vice-President
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-6 doublecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/nupur.jpg",
                            "8700614357",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Nupur Malik
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            Vice-President
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-12 singlecont">
                      <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/ansh.jpg",
                            "8518066443",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Ansh Khandelwal
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            General Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-4 triplecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/ayush.jpg",
                            "9149225262",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                          Ayush Singh
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Marketing Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/nishant.jpg",
                            "9968992525",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Nishant Sharma
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            Technical Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-3">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/mridul.jpg",
                            "9634157767",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Mridul Singhal
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            Technical Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-6 doublecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/dhruv.jpg",
                            "7627073047",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Dhruv Gupta
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            Logistics Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-6 doublecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/kshitij.jpg",
                            "8441944621",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Kshitiz Kain
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            Logistics Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-4 triplecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/ritu.jpg",
                            " 9602412495",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                          Ritu Chaoudhary
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Finance Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/devanshu.jpg",
                            "9314655304",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                          Devanshu Khandal
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Cultural Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-3">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/bhuvanagiri.jpg",
                            "8639261222",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                          Bhuvanagiri Venkata Srividya
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Cultural Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-6 doublecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/arunanshu.jpg",
                            "8696913951",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                          Arunanshu Deep Barnawal
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Media and Communication Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-6 doublecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/prasanna.jpg",
                            "9834017568",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                          Prasanna Venkatesh V
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Media and Communication Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-4 triplecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/suraj.jpg",
                            " 7763898654",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                          Suraj Prakash
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Publicity Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/pritesh.jpg",
                            "7610091747",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                          Pritesh Kumawat
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Décor Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-3">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/umang.png",
                            "8219263140",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                          Umang Bhardwaj
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Décor Secretory
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-6 doublecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/satya.jpg",
                            "8447018360",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Satya Dhwaj
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            Web Developer
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-6 doublecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/pranav.jpg",
                            "9560175360",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Pranav Sindura
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Web Developer
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-6 doublecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/keshav.jpg",
                            "8989144914",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Keshav Sharma
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                            Web Developer
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-6 doublecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/dp.jpeg",
                            "9601113188",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 style={{ textAlign: "center", color: "#9c301f" }}>
                            Dhairya Patel
                          </h4>
                          <h5 style={{ textAlign: "center", color: "white" }}>
                          Web Developer
                          </h5>
                          <br></br>
                        </div>
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
