import React, { Component } from "react";
import "./Team.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Splash from "./Splash";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
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
            <i style={{ color: "white" }} className="fas fa-phone-square-alt"></i>{" "}
            <span style={{ fontSize: "17px",color: "white" }}>{phone}</span> <br></br>
            <a href={insta} target="blank">
              <i style={{ color: "white" }} className="fab fa-instagram"></i>
            </a>{" "}
            <a className="icon-team" href={faceb} target="blank">
              <i
                style={{ color: "white" }}
                className="fab fa-facebook-square"
              ></i>
            </a>{" "}
            <a className="icon-team" href={linkedin} target="blank">
              <i style={{ color: "white" }} className="fab fa-linkedin"></i>
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
                <div className="section" style={{background:'#000000'}}>
                <Link to="/home">
                <div style={{padding:'0px',margin:'0px'}}>
                  
                      <img 
                      style={{height:'auto',width:'100px'}}
                      src="src/shared/img/blitzlogo.png"></img>
                    </div>
                    </Link>
                  <div className="container team-cont">
                    <h2 className="team-head singlecont">
                      Team Blitzschlag
                    </h2>
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Varun Kumar Verma
                          </h4>
                          <h5 style={{ textAlign: "center"  }} className="team-des">
                            ADVISOR
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-12 singlecont">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/varun.jpg",
                            "7525926870",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Anuj Srivastava
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            PRESIDENT
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Divyaman
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            VICE-PRESIDENT
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Nupur Malik
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          VICE-PRESIDENT
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Ansh Khandelwal
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            GENERAL SECRETORY
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Ayush Singh
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          MARKETING SECRETORY
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Nishant Sharma
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            TECHNICAL SECRETORY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-3">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/varun.jpg",
                            "9634157767",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Mridul Singhal
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            TECHNICAL SECRETORY
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Dhruv Gupta
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            LOGISTICS SECRETORY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-6 doublecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/varun.jpg",
                            "8441944621",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Kshitiz Kain
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            LOGISTICS SECRETORY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-4 triplecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/varun.jpg",
                            " 9602412495",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Ritu Chaoudhary
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          FINANCE SECRETORY
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Devanshu Khandal
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          CULTURAL SECRETORY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-3">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/srividya.jpg",
                            "8639261222",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Bhuvanagiri Venkata Srividya
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          CULTURAL SECRETORY
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Arunanshu Deep Barnawal
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          MEDIA AND COMMUNICATION SECRETORY
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Prasanna Venkatesh V
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          MEDIA AND COMMUNICATION SECRETORY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-4 triplecont-1">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/varun.jpg",
                            " 7763898654",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Suraj Prakash
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            <br></br>
                          PUBLICITY SECRETORY
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Pritesh Kumawat
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            <br></br>
                          DECOR SECRETORY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-3">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/varun.jpg",
                            "8219263140",
                            "https://www.instagram.com/umangbhardwaj9488/",
                            "https://www.facebook.com/profile.php?id=100009514595891",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Umang Bhardwaj
                          </h4>
                          <h5 className="team-des" style={{letterSpacing: '8px', textAlign: "center",fontSize:'0.8em'}}>
                          DECOR SECRETORY<br></br>GRAPHIC DESIGNER<br></br>DESIGNING HEAD
                          </h5>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="row" id="webd">
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
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Satya Dhwaj
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            WEB DEVELOPER
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
                        <div  className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Pranav Sindura
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          WEB DEVELOPER
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
                        <div  className="col-cont ">
                          <h4  className="team-name" style={{ textAlign: "center"}}>
                            Keshav Sharma
                          </h4>
                          <h5 style={{ textAlign: "center" }} className="team-des">
                          WEB DEVELOPER
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-6 doublecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/dp.jpg",
                            "9601113188",
                            "google.com",
                            "google.com",
                            "google.com"
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Dhairya Patel
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          WEB DEVELOPER
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
