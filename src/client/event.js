import React, { Component } from 'react';
import './Event2.css';
import eventData from './EventData';
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import Splash from './Splash';
export default class Event extends Component {
	state = { currSlide: 0 };
	images = [];
	data = [];
	componentWillMount()
	{
		// console.log(this.props);
		// this.data = eventData[this.props.eventType];
		try{
			this.data = eventData[this.props.match.params.id];
		}catch(e)
		{
			console.log('couldnt find match');
			this.data = eventData['flagship'];
		}
		// console.table(this.data.carImages)
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
				<ReactFullpage
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div
									className="section content"
									style={{ background: this.data.content[currSlide].accent[1] }}
								>
									{window.innerWidth <= 770 ? (
										<div style={{ width: '100%', height: '100%' }}>
											<Carousel
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
															<img className="imgmob" src={item} />
														</Carousel.Item>
													);
												})}
											</Carousel>
											<div
												style={{
													width: '100%',
													height: '60%',
													backgroundColor: this.data.content[currSlide].accent[2],
													position: 'absolute',
													left: '0%',
													bottom: '0%'
												}}
											></div>
											<div
												className="boxmovemob"
												style={{ backgroundColor: this.data.content[currSlide].accent[0] }}
											>
												<p className="slidenummob">0{currSlide + 1}</p>
											</div>
											<div
												className="control-nextmob"
												style={{ backgroundColor: this.data.content[currSlide].accent[0] }}
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
															return <p key={index*13}>{item}</p>;
														})}
													</div>
													<div className="button-holder">
														<div className="button-moreinfo">
															<Button variant="primary">More Info</Button>
														</div>
														<div className="button-register">
															<Button variant="primary">Register</Button>
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
													bottom: '0%'
												}}
											></div>
											<div
												onClick={() => {
													this.nextSlide();
												}}
												className="small-img-holder"
												style={{
													width: '10%',
													height: '15%',
													backgroundImage: `url("${
														this.data.carImages[(currSlide + 1) % this.data.carImages.length]
													}")`,
													backgroundSize: 'cover',
													position: 'absolute',
													right: '5%',
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
														right: '0%',
														backgroundColor: this.data.content[currSlide].accent[0],
														color: 'white',
														fontFamily: 'Quicksand',
														fontSize: '40pt'
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
												style={{ backgroundColor: this.data.content[currSlide].accent[0] }}
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
											<Col md={{ span: 4, offset: 7 }}>
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
											</Col>
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
