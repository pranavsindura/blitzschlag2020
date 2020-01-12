import React, { Component } from 'react';
import './Event2.css';
import eventData from './EventData';
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import Splash from './Splash';
import { Link } from 'react-router-dom';
export default class Flagship extends Component {
	state = { currSlide: 0 };
	images = [];
	data = [];
	componentWillMount() {
		this.data = eventData['flagship'];
	}
	nextSlide = () => {
		const { currSlide } = this.state;
		this.setState({ currSlide: (currSlide + 1) % this.data.carImages.length });
	};
	render() {
		const { currSlide } = this.state;
		return (
			<div>
				<Splash images={this.data.carImages} />
				<a href="https://blitz20.herokuapp.com/">
					<img
						style={{
							height: 'auto',
							width: '70px',
							position: 'fixed',
							left: '0%',
							top: '0%',
							zIndex: '1'
						}}
						src="https://i.ibb.co/42WZWbr/blitzlogo.png"
					/>
				</a>
				<ReactFullpage
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div
									className="section content"
									style={{
										background: this.data.content[currSlide].accent[1],
										transition: 'all .5s ease-in-out'
									}}
								>
									{window.innerWidth <= 770 ? (
										<div style={{ width: '100%', height: '100%', display: 'block' }}>
											<div className="carmob-holder-2">
												<img
													className="imgmob-2"
													src={this.data.carImages[currSlide]}
													onLoad={() => {
														fullpageApi.reBuild();
													}}
												/>
												{/* <Carousel
													className="carmob"
													indicators={false}
													interval="4000"
													controls={false}
													activeIndex={currSlide}
													// defaultActiveIndex={0}
												>
													{this.data.carImages.map((item, index) => {
														return (
															<Carousel.Item className="carmob-item" key={index}>
																<img className="imgmob" src={item} onLoad={()=>{fullpageApi.reBuild();}} />
															</Carousel.Item>
														);
													})}
												</Carousel> */}
											</div>
											<div
												style={{
													width: '100%',
													height: '30%',
													backgroundColor: this.data.content[currSlide].accent[0],
													position: 'absolute',
													left: '0%',
													bottom: '20%',
													transition: 'all .5s ease-in-out',
													display: 'block'
												}}
											>
												<div className="event-heading">
													<h1>{this.data.content[currSlide].heading}</h1>
												</div>
												<div className="event-desc">
													<p>{this.data.content[currSlide].desc}</p>
												</div>
											</div>
											<div
												className="other-info-holder"
												style={{
													backgroundColor: this.data.content[currSlide].accent[2],
													transition: 'all .5s ease-in-out'
												}}
											>
												<div className="other-infomob">
													<p>
														{this.data.content[currSlide].details.map((item, index) => {
															return (
																<span>
																	{item} <br />
																</span>
															);
														})}
													</p>
												</div>
											</div>
											<div className="button-holdermob">
												<div
													className="button-moreinfomob"
													style={{
														backgroundColor: this.data.content[currSlide].accent[2],
														transition: 'all .5s ease-in-out'
													}}
												>
													<p>Rules</p>
												</div>
												<div
													className="button-registermob"
													style={{
														backgroundColor: this.data.content[currSlide].accent[2],
														transition: 'all .5s ease-in-out'
													}}
												>
													<p>Register</p>
												</div>
											</div>
											<div
												className="boxmovemob"
												style={{
													backgroundColor: this.data.content[currSlide].accent[2],
													transition: 'all .5s ease-in-out'
												}}
											>
												<p className="slidenummob">0{currSlide + 1}</p>
											</div>
											<div
												className="control-nextmob"
												style={{
													backgroundColor: this.data.content[currSlide].accent[2],
													transition: 'all .5s ease-in-out'
												}}
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
													width: '40%',
													height: '100%',
													backgroundColor: this.data.content[currSlide].accent[0],
													position: 'absolute',
													transition: 'all .2s ease-in-out',
													left: '8%'
												}}
											>
												<div className="event-heading">
													<h1>{this.data.content[currSlide].heading}</h1>
												</div>
												<div className="event-desc">
													<p>{this.data.content[currSlide].desc}</p>
													<div className="other-info">
														{this.data.content[currSlide].details.map((item, index) => {
															return <p key={index * 13}>{item}</p>;
														})}
													</div>
													<div className="button-holder">
														<div
															className="button-moreinfo"
															style={{
																backgroundColor: this.data.content[currSlide].accent[2],
																transition: 'all .5s ease-in-out'
															}}
														>
															<p>Rules</p>
														</div>
														<div
															className="button-register"
															style={{
																backgroundColor: this.data.content[currSlide].accent[2],
																transition: 'all .5s ease-in-out'
															}}
														>
															<p>Register</p>
														</div>
													</div>
												</div>
											</div>
											<div
												style={{
													width: '45%',
													height: '40%',
													backgroundColor: this.data.content[currSlide].accent[2],
													position: 'absolute',
													right: '0%',
													bottom: '0%',
													transition: 'all .5s ease-in-out'
												}}
											></div>
											<div
												onClick={() => {
													this.nextSlide();
												}}
												className="small-img-holder"
												style={{
													width: '5%',
													height: '15%',
													backgroundImage: `url("${
														this.data.carImages[
															(currSlide + 1) % this.data.carImages.length
														]
													}")`,
													backgroundSize: 'cover',
													position: 'absolute',
													right: '6%',
													bottom: '20%',
													zIndex: '2',
													transition: 'all .5s'
												}}
											>
												<div
													className="control-next"
													style={{
														transition: 'all .5s',
														width: '20%',
														height: '100%',
														position: 'absolute',
														right: '-20%',
														backgroundColor: this.data.content[currSlide].accent[0],
														color: 'white',
														fontFamily: 'Quicksand',
														fontSize: '40pt',
														transition: 'all .5s ease-in-out'
													}}
												>
													<p
														style={{
															position: 'absolute',
															top: '50%',
															left: '50%',
															transform: 'translateX(-50%) translateY(-50%)',
															cursor: 'pointer'
														}}
													>
														&#8250;
													</p>
												</div>
											</div>
											<div
												className="boxmove"
												style={{
													backgroundColor: this.data.content[currSlide].accent[0],
													transition: 'all .5s ease-in-out'
												}}
											>
												<p
													style={{
														fontFamily: 'Quicksand',
														fontSize: '20pt',
														textAlign: 'center',
														color: '#f7f7f7',
														lineHeight: '60px'
													}}
												>
													0{currSlide + 1}
												</p>
											</div>
											<div
												style={{
													position: 'absolute',
													width: '32%',
													height: '98%',
													left: '59%',
													top: '0%'
												}}
											>
												<Carousel
													className="car"
													indicators={false}
													interval="4000"
													controls={false}
													activeIndex={currSlide}
													// defaultActiveIndex={0}
												>
													{this.data.carImages.map((item, index) => {
														return (
															<Carousel.Item className="caritem" key={index}>
																<img className="img" src={item} />
															</Carousel.Item>
														);
													})}
												</Carousel>
											</div>
										</Row>
									)}
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
			</div>
		);
	}
}
