import React, { Component } from 'react';
import './Event2.css';
// import ControlledCarousel from './EventCar.js';
import {Row, Col, Carousel } from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import Splash from './Splash';
export default class Event extends Component {
	state = {currSlide: 0}
	images = [
		// 'src/shared/img/lit.png',
		// 'src/shared/img/dra.png',
		// 'src/shared/img/fin.png',
		// 'src/shared/img/cul.png',
		// 'src/shared/img/gam.png',
		// 'src/shared/img/mus.png',
		// 'src/shared/img/pho.png',
		"src/shared/img/car1.jpg",
		"src/shared/img/car2.jpg",
		"src/shared/img/car3.jpg"
	];
	carImages = [
		"src/shared/img/car1.jpg",
		"src/shared/img/car2.jpg",
		"src/shared/img/car3.jpg"
	  ];
	nextSlide = () => {
		const { currSlide } = this.state;
		this.setState({ currSlide: (currSlide + 1) % this.carImages.length });
	  };
	render() {
		const {currSlide} = this.state;
		return (
			<div>
				<Splash images={this.images}/>
				<ReactFullpage
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
							<div
                  className="section content"
                  style={{ background: "#f7f7f7" }}
                >
                  {window.innerWidth <= 770 ? (
                    <div style={{ width: "100%", height: "100%" }}>
                      <Carousel
                        className="carmob"
                        indicators={false}
                        interval="4000"
                        controls={false}
                        activeIndex={currSlide}
                        defaultActiveIndex={0}
                      >
                        {this.carImages.map((item, index) => {
                          return (
                            <Carousel.Item className="carmob-item" key={index}>
                              <img className="imgmob" src={item} />
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>
                      <div
                        style={{
                          width: "100%",
                          height: "60%",
                          backgroundColor: "#393e46",
                          position: "absolute",
                          left: "0%",
                          bottom: "0%"
                        }}
                      ></div>
                      <div className="boxmovemob">
                        <p className="slidenummob">0{currSlide + 1}</p>
                      </div>
                      <div
                        className="control-nextmob"
                        onClick={() => {
                          this.nextSlide();
                        }}
                      >
                        <p className="next-iconmob">&#8250;</p>
                      </div>
                    </div>
                  ) : (
                    <Row>
                      <div
                        style={{
                          width: "40%",
                          height: "100%",
                          backgroundColor: "#929aab",
                          position: "absolute"
                        }}
                      ></div>
                      <div
                        style={{
                          width: "45%",
                          height: "40%",
                          backgroundColor: "#393e46",
                          position: "absolute",
                          right: "0%",
                          bottom: "0%"
                        }}
                      ></div>
                      <div
                        onClick={() => {
                          this.nextSlide();
                        }}
                        className="small-img-holder"
                        style={{
                          width: "10%",
                          height: "15%",
                          backgroundImage: `url("${
                            this.carImages[
                              (currSlide + 1) % this.carImages.length
                            ]
                          }")`,
                          backgroundSize: "cover",
                          position: "absolute",
                          right: "5%",
                          bottom: "20%",
                          zIndex: "2",
                          transition: "all .5s"
                        }}
                      >
                        <div
                          className="control-next"
                          style={{
                            transition: "all .5s",
                            width: "20%",
                            height: "100%",
                            position: "absolute",
                            right: "0%",
                            backgroundColor: "#929AAB",
                            color: "white",
                            fontFamily: "Quicksand",
                            fontSize: "40pt"
                          }}
                        >
                          <p
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translateX(-50%) translateY(-50%)",
                              cursor: "pointer"
                            }}
                          >
                            &#8250;
                          </p>
                        </div>
                      </div>
                      <div className="boxmove">
                        <p
                          style={{
                            fontFamily: "Quicksand",
                            fontSize: "20pt",
                            textAlign: "center",
                            color: "#f7f7f7",
                            lineHeight: "60px"
                          }}
                        >
                          0{currSlide + 1}
                        </p>
                      </div>
                      <Col md={{ span: 7, offset: 4 }}>
                        <Carousel
                          className="car"
                          indicators={false}
                          interval="4000"
                          controls={false}
                          activeIndex={currSlide}
                          defaultActiveindex={1}
                        >
                          {this.carImages.map((item, index) => {
                            return (
                              <Carousel.Item className="caritem" key={index}>
                                <img className="img" src={item} />
                              </Carousel.Item>
                            );
                          })}
                        </Carousel>
                      </Col>
                    </Row>
                  )}
                </div>
								{/*<div className="section">
									<h1 style={{
										position: 'absolute',
										zIndex:'2',
										backgroundColor:'black',
										color:"black",
										width: '100%',
										margin:'0',
										padding: '10px',
									}}>.</h1>
									<h1
										style={{
											position: 'absolute',
											zIndex: '3',
											left: '50%',
											transform: 'translateX(-50%)',
											padding: '10px',
										}}
									>
										Events
									</h1>
									<ControlledCarousel />
								</div>*/}
							</ReactFullpage.Wrapper>
						);
					}}
				/>
				</div>
		);
	}
}
