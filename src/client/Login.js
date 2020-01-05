import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// import 'fullpage.js/vendors/scrolloverflow';
import Splash from './Splash';
import './Login.css';
import { Form, Button, Card, Col, Row, Alert, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Sky from 'react-sky';

const registerDetailsTemplate = {
	firstName: '',
	lastName: '',
	email: '',
	mob: '',
	college: '',
	collegeID: '',
	blitzPIN: '',
	isMNIT: false,
	accomodation: false
};
const loginDetailsTemplate = {
	blitzID: '',
	blitzPIN: ''
};
class Login extends React.Component {
	state = {
		submitMessage: '',
		whichForm: true,
		// registerFormPart: true,
		registerDetails: {
			firstName: '',
			lastName: '',
			email: '',
			mob: '',
			college: '',
			collegeID: '',
			blitzPIN: '',
			isMNIT: false,
			accomodation: false
		},
		loginDetails: {
			blitzID: '',
			blitzPIN: ''
		}
	};
	proxy = 'http://localhost:8080';
	componentDidMount() {
		if (this.props.production) this.proxy = '';
	}
	images = [
		'https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg',
		// 'https://i.imgur.com/R4y6Kwt.gif',
		'https://i.imgur.com/eVjW01Z.gif',
		'https://imgur.com/iVUKgex.jpg'
	];
	changeForm = (fullpageApi) => {
		// fullpageApi.reBuild();
		this.setState(
			{
				whichForm: !this.state.whichForm,
				submitMessage: '',
				// registerFormPart: true,
				registerDetails: {
					firstName: '',
					lastName: '',
					email: '',
					mob: '',
					college: '',
					collegeID: '',
					blitzPIN: '',
					isMNIT: false,
					accomodation: false
				},
				loginDetails: {
					blitzID: '',
					blitzPIN: ''
				}
			},
			() => {
				fullpageApi.reBuild();
			}
		);
	};
	handleRegisterChange = (e) => {
		let newDetails = this.state.registerDetails;
		let value = e.target.value;
		if (e.target.type === 'radio') {
			if (value === 'true') value = true;
			else value = false;
		}
		newDetails[e.target.id] = value;
		this.setState({ registerDetails: newDetails });
	};
	handleRegisterSubmit = (event) => {
		event.preventDefault();
		const { registerDetails } = this.state;
		// console.log(registerDetails);
		axios
			.post(this.proxy + '/signup', registerDetails)
			.then((res) => {
				res = res.data;
				// console.log(res);
				if (res.status) {
					// alert('You are successfully Registered!');

					console.log(res.data);
					this.setState(
						{
							submitMessage: (
								<Col>
									<Col>
										<p className="text-success">You are successfully Registered!</p>
									</Col>
									<Col>
										<p className="text-success font-weight-bold">
											Your BlitzID: blitz@{res.data.blitzID}
										</p>
									</Col>
								</Col>
							),
							registerDetails: {
								firstName: '',
								lastName: '',
								email: '',
								mob: '',
								college: '',
								collegeID: '',
								blitzPIN: '',
								isMNIT: false,
								accomodation: false
							}
						},
						() => {
							fullpage_api.reBuild();
						}
					);
				} else {
					// alert('Invalid Details!');
					console.log('NOT registered!');
					this.setState(
						{
							submitMessage: (
								<Col>
									<p className="text-danger">{res.message}</p>
								</Col>
							)
						},
						() => {
							fullpage_api.reBuild();
						}
					);
				}
			})
			.catch((err) => {
				this.setState(
					{
						submitMessage: (
							<Col>
								<p className="text-danger">Experiencing Network Issues!</p>
							</Col>
						)
					},
					() => {
						fullpage_api.reBuild();
					}
				);
				console.log(err);
			});
	};
	handleLoginChange = (e) => {
		let newDetails = this.state.loginDetails;
		newDetails[e.target.id] = e.target.value;
		this.setState({ loginDetails: newDetails });
	};
	handleLoginSubmit = (event) => {
		console.log(this.proxy);
		event.preventDefault();
		const { loginDetails } = this.state;
		// console.log(loginDetails);
		axios
			.post(this.proxy + '/login', loginDetails)
			.then((res) => {
				res = res.data;
				console.log(res);
				if (res.status) {
					this.props.LOGIN(res.data);
					// this.setState({
					// 	loginDetails: {
					// 		blitzID: '',
					// 		blitzPIN: ''
					// 	}
					// });
				} else {
					this.setState(
						{
							submitMessage: (
								<Col>
									<p className="text-danger">{res.message}</p>
								</Col>
							)
						},
						() => {
							fullpage_api.reBuild();
						}
					);
				}
			})
			.catch((err) => {
				this.setState(
					{
						submitMessage: (
							<Col>
								<p className="text-danger">Experiencing Network Issues!</p>
							</Col>
						)
					},
					() => {
						fullpage_api.reBuild();
					}
				);
				console.log(err);
			});
	};
	// handleRegisterFormNext = (event, fullpageApi) => {
	// 	event.preventDefault();
	// 	this.setState({ registerFormPart: false }, () => {
	// 		fullpageApi.reBuild();
	// 	});
	// 	// fullpageApi.reBuild();
	// };
	// handleRegisterFormPrev = (fullpageApi) => {
	// 	this.setState({ registerFormPart: true, submitMessage: '' }, () => {
	// 		fullpageApi.reBuild();
	// 	});
	// 	// fullpageApi.reBuild();
	// };
	render() {
		if (this.props.loggedIn) {
			return <Redirect to="/myaccount" />;
		}
		const { registerDetails, loginDetails, submitMessage } = this.state;
		const registerForm = (
			<div className="section coverlogin">
				<div className="formwrapper">
					<h1 className="heading">Register</h1>
					<Card>
						<Card.Body>
							<Form
								onSubmit={() => {
									this.handleRegisterSubmit(event);
								}}
							>
								<Form.Row>
									<Col>
										<Form.Group>
											<Form.Control
												onChange={() => {
													this.handleRegisterChange(event);
												}}
												value={registerDetails.firstName}
												id="firstName"
												type="text"
												required={true}
												placeholder="First Name"
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group>
											<Form.Control
												onChange={() => {
													this.handleRegisterChange(event);
												}}
												value={registerDetails.lastName}
												id="lastName"
												type="text"
												required={true}
												placeholder="Last Name"
											/>
										</Form.Group>
									</Col>
								</Form.Row>
								<Form.Group>
									<Form.Control
										onChange={() => {
											this.handleRegisterChange(event);
										}}
										value={registerDetails.email}
										id="email"
										type="email"
										required={true}
										placeholder="Email"
									/>
								</Form.Group>
								<Form.Group>
									<Form.Control
										onChange={() => {
											this.handleRegisterChange(event);
										}}
										value={registerDetails.mob}
										id="mob"
										type="phone"
										required={true}
										placeholder="Mobile Number"
									/>
								</Form.Group>
								<Form.Group>
									<Form.Control
										onChange={() => {
											this.handleRegisterChange(event);
										}}
										value={registerDetails.college}
										id="college"
										type="text"
										required={true}
										placeholder="College Name"
									/>
								</Form.Group>
								<Form.Group>
									<Form.Control
										onChange={() => {
											this.handleRegisterChange(event);
										}}
										value={registerDetails.collegeID}
										id="collegeID"
										type="text"
										required={true}
										placeholder="College ID"
									/>
								</Form.Group>
								<Form.Group>
									<Form.Control
										value={registerDetails.blitzPIN}
										onChange={() => {
											this.handleRegisterChange(event);
										}}
										required={true}
										id="blitzPIN"
										type="password"
										placeholder="4 digit PIN"
									/>
								</Form.Group>
								<fieldset>
									<Form.Group>
										<Form.Label>Are you a student of MNIT/IIITK/NIT UK?</Form.Label>
										<Form.Row>
											<Col style={{ textAlign: 'left' }}>
												<Form.Check
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													checked={registerDetails.isMNIT}
													value={true}
													type="radio"
													id="isMNIT"
													label="Yes"
												/>
											</Col>
											<Col style={{ textAlign: 'left' }}>
												<Form.Check
													onChange={() => {
														console.log('no');
														this.handleRegisterChange(event);
													}}
													checked={!registerDetails.isMNIT}
													value={false}
													type="radio"
													id="isMNIT"
													label="No"
												/>
											</Col>
										</Form.Row>
									</Form.Group>
								</fieldset>
								<fieldset>
									<Form.Group>
										<Form.Label>Do you need Accomodation?</Form.Label>
										<Form.Row>
											<Col style={{ textAlign: 'left' }}>
												<Form.Check
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													checked={registerDetails.accomodation}
													value={true}
													type="radio"
													id="accomodation"
													label="Yes"
												/>
											</Col>
											<Col style={{ textAlign: 'left' }}>
												<Form.Check
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													checked={!registerDetails.accomodation}
													value={false}
													type="radio"
													id="accomodation"
													label="No"
												/>
											</Col>
										</Form.Row>
									</Form.Group>
								</fieldset>
								<Row>
									<Col>
										<Button variant="success" type="submit">
											Submit
										</Button>
									</Col>
								</Row>
								<Row>{submitMessage}</Row>
								<Row>
									<Col>
										<a
											className="changeform"
											href="#"
											onClick={() => this.changeForm(fullpage_api)}
										>
											Already have an account?
										</a>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
		const loginForm = (
			<div className="section coverlogin">
				<div
					className="formwrapper"
					// style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
				>
					<h1 className="heading">Login</h1>
					<Card>
						<Card.Body>
							<Form
								onSubmit={() => {
									this.handleLoginSubmit(event);
								}}
							>
								<Form.Group>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend">blitz@</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											onChange={() => {
												this.handleLoginChange(event);
											}}
											value={loginDetails.blitzID}
											id="blitzID"
											type="text"
											required={true}
											placeholder="Blitz ID"
										/>
									</InputGroup>
								</Form.Group>

								<Form.Group>
									<Form.Control
										onChange={() => {
											this.handleLoginChange(event);
										}}
										value={loginDetails.blitzPIN}
										id="blitzPIN"
										type="password"
										required={true}
										placeholder="4 digit PIN"
									/>
								</Form.Group>
								<Row>
									<Col>
										<Button variant="success" type="submit">
											Submit
										</Button>
									</Col>
								</Row>
								<Row>{submitMessage}</Row>
								<Row>
									<Col>
										<a
											className="changeform"
											href="#"
											onClick={() => this.changeForm(fullpage_api)}
										>
											Create new account
										</a>
									</Col>
								</Row>
							</Form>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
		const { whichForm } = this.state;
		return (
			<div className="scrollit">
				<Splash images={this.images} />
				<ReactFullpage
					verticalCentered={false}
					scrollOverflow={true}
					scrollOverflowOptions={{
						click: false,
						preventDefaultException: { tagName: /.*/ }
					}}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<Sky
									images={{
										0: 'https://i.imgur.com/eVjW01Z.gif'
									}}
									how={50}
									time={40}
									size={'100px'}
									background={'url("https://imgur.com/iVUKgex.jpg")'}
								/>
								{whichForm ? loginForm : registerForm}
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
		user: state.user,
		production: state.production
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		LOGIN: (user) => {
			dispatch({ type: 'LOGIN', payload: { user: user } });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
