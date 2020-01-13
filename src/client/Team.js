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
  renderMember(imgsrc, phone, insta, faceb, linkedin,fullpageApi) {
    return (
      <div className="base">
        <img
        onLoad={() => {
          fullpageApi.reBuild();
        }}
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
                            "https://www.instagram.com/varun1878/",
                            "https://www.facebook.com/profile.php?id=100009155759864",
                            "null",
                            fullpageApi
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
                            "src/shared/img/team/anuj.jpg",
                            "7525926870",
                            "https://www.instagram.com/anujsrivastava7/",
                            "https://www.facebook.com/Anujsrivastava.MSD7",
                            "https://www.linkedin.com/in/anuj-srivastava-b26b92179",
                            fullpageApi
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
                            "https://www.instagram.com/divyaman_purbey/",
                            "https://www.facebook.com/divyaman.purbey",
                            
                            "null",
                            fullpageApi
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
                            "https://www.instagram.com/nupur02_malik/",
                            "https://www.facebook.com/profile.php?id=100020421310633&fref=search&__tn__=%2Cd%2CP-R&eid=ARCj2ETE5c1Fxy3Eq-NsJ9gInELeLuFm7gxJNDji0Peo9vFM74qcSFdOwlFxLE4pxe4sLUTHjPg0ieeX",
                            
                            "null",
                            fullpageApi
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
                            "https://www.instagram.com/anshkhandelwal7/",
                            "https://www.facebook.com/AnshKhandelwal26",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Ansh Khandelwal
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            GENERAL SECRETARY
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
                            "https://www.instagram.com/singhayush_pratap/",
                            "https://www.facebook.com/ayush.singh.16100",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Ayush Singh
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          MARKETING SECRETARY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/nishant.jpg",
                            "9968992525",
                            "https://www.instagram.com/nishant__sharma/",
                            "https://www.facebook.com/1Nishant.Sharma1",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Nishant Sharma
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            TECHNICAL SECRETARY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-3">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/mridul.jpg",
                            "9634157767",
                            "https://www.instagram.com/mridul_singhal19/",
                            "https://www.facebook.com/mridul.singhal.121",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Mridul Singhal
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            TECHNICAL SECRETARY
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
                            "https://www.instagram.com/dhruv_gupta30/",
                            "https://www.facebook.com/dhruv.gupta.30",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Dhruv Gupta
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            LOGISTICS SECRETARY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-6 doublecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/kshitiz.JPG",
                            "8441944621",
                            "https://www.instagram.com/kshitizkain/",
                            "https://www.facebook.com/kshitiz.kain",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                            Kshitiz Kain
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            LOGISTICS SECRETARY
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
                            "https://www.instagram.com/ritu4536/",
                            "https://www.facebook.com/profile.php?id=100009506987606",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Ritu Choudhary
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          FINANCE SECRETARY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/devanshu.jpg",
                            "9314655304",
                            "https://www.instagram.com/pagal_devanshu/",
                            "https://www.facebook.com/devanshu.khandal",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Devanshu Khandal
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          CULTURAL SECRETARY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-3">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/srividya.jpg",
                            "8639261222",
                            "https://www.instagram.com/vidya._.99/",
                            "https://www.facebook.com/venkata.srividya.3",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Bhuvanagiri Venkata Srividya
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          CULTURAL SECRETARY
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
                            "https://www.instagram.com/arudeep.25/",
                            "https://www.facebook.com/profile.php?id=100017390686711",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Arunanshu Deep Barnawal
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          MEDIA AND COMMUNICATION SECRETARY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-6 doublecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/prasanna.jpg",
                            "9834017568",
                            "",
                            "https://www.facebook.com/prasuv1748",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Prasanna Venkatesh V
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                          MEDIA AND COMMUNICATION SECRETARY
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
                            "https://www.instagram.com/spdstunter/",
                            "https://www.facebook.com/profile.php?id=100004962662779",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont ">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Suraj Prakash
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            
                          PUBLICITY SECRETARY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-2">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/pritesh.jpg",
                            "7610091747",
                            "https://www.instagram.com/pritesh.kumawat99/",
                            "https://www.facebook.com/profile.php?id=100008316942264",
                            
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Pritesh Kumawat
                          </h4>
                          <h5 style={{ textAlign: "center"}} className="team-des">
                            
                          DECOR SECRETARY
                          </h5>
                          <br></br>
                        </div>
                      </div>
                      <div className="col-md-4 triplecont-3">
                        <div className="dummycol">
                          {this.renderMember(
                            "src/shared/img/team/umang.JPG",
                            "8219263140",
                            "https://www.instagram.com/umangbhardwaj9488/",
                            "https://www.facebook.com/profile.php?id=100009514595891",
                            "null",
                            fullpageApi
                          )}
                        </div>
                        <div className="col-cont">
                          <h4 className="team-name" style={{ textAlign: "center"}}>
                          Umang Bhardwaj
                          </h4>
                          <h5 className="team-des" style={{letterSpacing: '8px', textAlign: "center",fontSize:'0.8em'}}>
                          DECOR SECRETARY<br></br>DESIGNING HEAD
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
                            "https://www.instagram.com/dhwajsatya/",
                            "https://www.facebook.com/satya.dhwaj",
                            "https://www.linkedin.com/in/satya-dhwaj-92081b146/",
                            fullpageApi
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
                            "https://www.instagram.com/pranavsindura/",
                            "https://www.facebook.com/ps.jmaster",
                            "https://www.linkedin.com/in/pranav-sindura-197419184/",
                            fullpageApi
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
                            "https://www.instagram.com/keshav_sharma_ji/",
                            "https://www.facebook.com/keshav.sharma.7165331",
                            "https://www.linkedin.com/in/keshav-sharma-691235192/",
                            fullpageApi
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
                            "src/shared/img/team/dp.JPG",
                            "9601113188",
                            "https://www.instagram.com/pdhairya8/",
                            "https://www.facebook.com/pdhairya1",
                            "https://www.linkedin.com/in/dhairya-patel-571831184/",
                            fullpageApi
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