import React, { Component } from 'react';
import './Event2.css';
import eventData from './EventData';
import { Row, Col, Carousel, InputGroup, Card, Form, Button } from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import Splash from './Splash';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Event extends Component {
	state = {
		currSlide: 0,
		showRegister: false,
		registerDetails: {
			teamID: 0,
			eventName: '',
			teamSize: 0,
			teamName: '',
			teamMembers: []
		},
		submitMessage: '',
		redirect: false
	};

	images = [];
	data = [];
	proxy = 'http://localhost:8080';
	componentWillMount() {
		if (this.props.production) this.proxy = '';
		if (this.props.match.params.eventType) {
			if (eventData[this.props.match.params.eventType]) {
				this.data = eventData[this.props.match.params.eventType];
				console.log('Found: ' + this.props.match.params.eventType);
			} else {
				console.log('NOT FOUND');
				this.data = eventData['flagship'];
			}
		} else {
			console.log('NOT FOUND');
			this.data = eventData['flagship'];
		}
	}
	componentDidMount() {
		let registerDetails = {
			teamSize: this.data.content[0].registerConstraints.minTeamSize,
			teamID: 0,
			eventName: '',
			teamName: '',
			teamMembers: []
		};
		for (let i = 0; i < this.data.content[0].registerConstraints.minTeamSize; i++) {
			registerDetails.teamMembers.push({ blitzID: '', blitzPIN: '' });
		}
		this.setState({ registerDetails });
	}
	shouldRedirect = () => {
		if (this.state.redirect) return <Redirect to="/login" />;
		else return null;
	};
	handleTeamSizeChange = (fullpageApi, e) => {
		// console.log(e.target.id, e.target.value, typeof e.target.id, typeof e.target.value);
		const registerDetails = { ...this.state.registerDetails };
		registerDetails[e.target.id] = Number(e.target.value);
		registerDetails.teamName = '';
		registerDetails.teamMembers = [];
		for (let i = 0; i < registerDetails.teamSize; i++) {
			registerDetails.teamMembers.push({ blitzID: '', blitzPIN: '' });
		}
		// console.log(registerDetails);
		this.setState({ registerDetails }, () => {
			fullpageApi.reBuild();
		});
	};
	handleTeamNameChange = (e) => {
		const registerDetails = { ...this.state.registerDetails };
		registerDetails[e.target.id] = e.target.value;
		this.setState({ registerDetails });
	};
	handleRegister = (e) => {
		e.preventDefault();
		console.log(this.state.registerDetails);
		if (!this.props.loggedIn) {
			this.setState({ redirect: true });
		} else {
			const { registerDetails, currSlide } = this.state;
			let blitzID = [];
			let blitzPIN = [];
			for (let i = 0; i < registerDetails.teamMembers.length; i++) {
				blitzID.push(Number(registerDetails.teamMembers[i].blitzID));
				// console.log(typeof blitzID[i]);
				blitzPIN.push(registerDetails.teamMembers[i].blitzPIN);
			}
			registerDetails['blitzID'] = blitzID;
			registerDetails['blitzPIN'] = blitzPIN;
			registerDetails['eventID'] = Number(this.data.content[currSlide].eventID);
			console.log(registerDetails);
			axios
				.post(this.proxy + '/events', registerDetails)
				.then((res) => {
					res = res.data;
					console.log(res);
					if (res.status) {
						alert(`Your TeamID: ${res.data}`);
						this.setState({
							submitMessage: (
								<Col>
									<Col>
										<p className="text-white">You are successfully Registered!</p>
									</Col>
									<Col>
										<p className="text-white font-weight-bold">Your TeamID: {res.data}</p>
									</Col>
								</Col>
							)
						},
						() => {
							fullpage_api.reBuild();
						});
					} else {
						this.setState({
							submitMessage: (
								<Col>
									<p className="text-danger">{res.message}</p>
								</Col>
							)
						},
						() => {
							fullpage_api.reBuild();
						});
					}
				})
				.catch((e) => {
					console.log('Network issues');
					this.setState({
						submitMessage: (
							<Col>
								<p className="text-danger">Experiencing Network Issues!</p>
							</Col>
						)
					},
					() => {
						fullpage_api.reBuild();
					});
				});
		}
		console.log(this.state.registerDetails);
	};
	componentDidUpdate() {
		console.log(this.state);
	}
	nextSlide = () => {
		const { currSlide } = this.state;
		this.setState({ currSlide: (currSlide + 1) % this.data.carImages.length });
	};
	showRegister = (fullpageApi) => {
		fullpageApi.moveSectionDown();
	};
	createTeamMemberSelect = () => {
		const { currSlide } = this.state;
		let options = [];
		for (
			let i = this.data.content[currSlide].registerConstraints.minTeamSize;
			i <= this.data.content[currSlide].registerConstraints.maxTeamSize;
			i++
		) {
			options.push(
				<option value={i} key={`opt-${i}`}>
					{i}
				</option>
			);
		}
		return options;
	};
	handleMemberDataChange = (e, type, ind) => {
		console.log(type, ind);
		const { registerDetails } = this.state;
		registerDetails.teamMembers[ind][type] = e.target.value;
		this.setState({ registerDetails });
	};
	createTeamMemberInput = () => {
		let input = [];
		const { registerDetails } = this.state;
		console.log(registerDetails);
		for (let i = 0; i < registerDetails.teamSize; i++) {
			input.push(
				<Form.Row key={`formrow-${i}`}>
					<Form.Label>Member {i + 1}:</Form.Label>
					<Form.Row>
						<Col>
							<Form.Group>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroupPrepend">blitz20@</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
										value={this.state.registerDetails.teamMembers[i].blitzID}
										onChange={() => {
											this.handleMemberDataChange(event, 'blitzID', i);
										}}
										required={true}
										id={`memberID${i}`}
										type="text"
										placeholder="ID"
									/>
								</InputGroup>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Control
									value={this.state.registerDetails.teamMembers[i].blitzPIN}
									onChange={() => {
										this.handleMemberDataChange(event, 'blitzPIN', i);
									}}
									required={true}
									id={`memberPIN${i}`}
									type="password"
									placeholder="PIN"
								/>
							</Form.Group>
						</Col>
					</Form.Row>
				</Form.Row>
			);
		}
		return input;
	};
	render() {
		const { currSlide, registerDetails, submitMessage } = this.state;
		return (
			<div>
				<Splash images={this.data.carImages} />

				<a href="http://www.blitzschlag.co.in/">
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
					scrollOverflow={true}
					onLeave={({ origin, destination, direction }) => {
						if (!this.data.content[currSlide].canRegister) return false;
					}}
					scrollOverflowOptions={{
						click: false,
						preventDefaultException: { tagName: /.*/ }
					}}
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
												<a href={this.data.content[currSlide].detailsLink} target="_blank">
													<div
														className="button-moreinfomob"
														style={{
															backgroundColor: this.data.content[currSlide].accent[2],
															transition: 'all .5s ease-in-out'
														}}
													>
														<p>Details</p>
													</div>
												</a>
												{this.data.content[currSlide].canRegister ? (
													<div
														className="button-registermob"
														style={{
															backgroundColor: this.data.content[currSlide].accent[2],
															transition: 'all .5s ease-in-out'
														}}
														onClick={() => {
															console.log('click');
															this.showRegister(fullpageApi);
														}}
													>
														<p>Register</p>
													</div>
												) : null}
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
														<a
															href={this.data.content[currSlide].detailsLink}
															target="_blank"
														>
															<div
																className="button-moreinfo"
																style={{
																	backgroundColor: this.data.content[currSlide]
																		.accent[2],
																	transition: 'all .5s ease-in-out'
																}}
															>
																<p>Details</p>
															</div>
														</a>
														{this.data.content[currSlide].canRegister ? (
															<div
																className="button-register"
																style={{
																	backgroundColor: this.data.content[currSlide]
																		.accent[2],
																	transition: 'all .5s ease-in-out'
																}}
																onClick={() => {
																	this.showRegister(fullpageApi);
																}}
															>
																<p>Register</p>
															</div>
														) : null}
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
								<div
									className="section"
									style={{
										background: this.data.content[currSlide].accent[1],
										transition: 'all .5s ease-in-out'
									}}
								>
									{this.shouldRedirect()}
									<div className="formwrapper">
									<h1 className="heading">{this.data.content[currSlide].heading}</h1>
									<h1 className="heading">Register</h1>
									<Card>
										<Card.Body>
											<Form
												onSubmit={() => {
													this.handleRegister(event);
												}}
											>
												<Form.Row>
													<Form.Label>Team Size:</Form.Label>
													<Form.Group>
														<select
															id="teamSize"
															value={registerDetails.teamSize}
															onChange={() => {
																this.handleTeamSizeChange(fullpageApi, event);
															}}
														>
															{this.createTeamMemberSelect()}
														</select>
													</Form.Group>
												</Form.Row>
												{registerDetails.teamSize > 1 ? (
													<Form.Row>
														<Form.Label>Team Name:</Form.Label>
														<Form.Group>
															<Form.Control
																value={this.state.registerDetails.teamName}
																onChange={() => {
																	this.handleTeamNameChange(event);
																}}
																required={true}
																id="teamName"
																type="text"
																placeholder="Team Name"
															/>
														</Form.Group>
													</Form.Row>
												) : null}
												{this.createTeamMemberInput(fullpageApi)}
												<Row>
													<Col>
														<Button
															style={{
																backgroundColor: this.data.content[currSlide].accent[0]
															}}
															className="event-submit-button"
															type="submit"
														>
															Submit
														</Button>
													</Col>
												</Row>
												<Row>{submitMessage}</Row>
												{() => {
													fullpageApi.reBuild();
												}}
											</Form>
										</Card.Body>
									</Card>
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

const mapStateToProps = (state) => {
	return {
		loggedIn: state.loggedIn,
		production: state.production
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
