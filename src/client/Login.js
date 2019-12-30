import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// import 'fullpage.js/vendors/scrolloverflow';
import Splash from './Splash';
import './Login.css';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
		whichForm: true,
		registerFormPart: true,
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
	images = ['https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg'];
	changeForm = () => {
		this.setState({
			whichForm: !this.state.whichForm,
			registerFormPart: true,
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
		});
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
	handleRegisterSubmit = () => {
		const { registerDetails } = this.state;
		console.log(registerDetails);
		this.setState({
			registerFormPart: true,
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
		});
	};
	handleLoginChange = (e) => {
		let newDetails = this.state.loginDetails;
		newDetails[e.target.id] = e.target.value;
		this.setState({ loginDetails: newDetails });
	};
	handleLoginSubmit = () => {
		const { loginDetails } = this.state;
		console.log(loginDetails);
		this.setState({
			loginDetails: {
				blitzID: '',
				blitzPIN: ''
			}
		});
		this.props.LOGIN({ blitzID: loginDetails.blitzID });
	};
	handleRegisterFormNext = () => {
		this.setState({ registerFormPart: false });
	};
	handleRegisterFormPrev = () => {
		this.setState({ registerFormPart: true });
	};
	render() {
		if (this.props.loggedIn) {
			return <Redirect to="/myaccount" />;
		}
		const { registerDetails, loginDetails } = this.state;
		const registerFormPart1 = (
			<div className="section coverlogin">
				<div className="formwrapper">
					<h1 className="heading">Register</h1>
					<Card>
						<Card.Body>
							<Form>
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
										placeholder="College ID"
									/>
								</Form.Group>
								<Row>
									<Col>
										<Button
											onClick={() => {
												this.handleRegisterFormNext();
											}}
											variant="primary"
										>
											Next >>
										</Button>
									</Col>
								</Row>
								<Row>
									<Col>
										<a className="changeform" href="#" onClick={() => this.changeForm()}>
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
		const registerFormPart2 = (
			<div className="section coverlogin">
				<div className="formwrapper">
					<h1 className="heading">Register</h1>
					<Card>
						<Card.Body>
							<Form>
								<Form.Group>
									<Form.Control
										value={registerDetails.blitzPIN}
										onChange={() => {
											this.handleRegisterChange(event);
										}}
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
										<Button
											onClick={() => {
												this.handleRegisterFormPrev();
											}}
											variant="primary"
										>
											{'<< Back'}
										</Button>
									</Col>
									<Col>
										<Button
											onClick={() => {
												this.handleRegisterSubmit();
											}}
											variant="success"
										>
											Submit
										</Button>
									</Col>
								</Row>
								<Row>
									<Col>
										<a className="changeform" href="#" onClick={() => this.changeForm()}>
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
				<div className="formwrapper">
					<h1 className="heading">Login</h1>
					<Card>
						<Card.Body>
							<Form>
								<Form.Group>
									<Form.Control
										onChange={() => {
											this.handleLoginChange(event);
										}}
										value={loginDetails.blitzID}
										id="blitzID"
										type="text"
										placeholder="Blitz ID"
									/>
								</Form.Group>
								<Form.Group>
									<Form.Control
										onChange={() => {
											this.handleLoginChange(event);
										}}
										value={loginDetails.blitzPIN}
										id="blitzPIN"
										type="password"
										placeholder="4 digit PIN"
									/>
								</Form.Group>
								<Row>
									<Col>
										<Button
											onClick={() => {
												this.handleLoginSubmit();
											}}
											variant="success"
										>
											Submit
										</Button>
									</Col>
								</Row>
								<Row />
								<Row>
									<Col>
										<a className="changeform" href="#" onClick={() => this.changeForm()}>
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
		const { whichForm, registerFormPart } = this.state;
		return (
			<div className="scrollit">
				<Splash images={this.images} />
				<ReactFullpage
					verticalCentered={false}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								{whichForm ? loginForm : registerFormPart ? registerFormPart1 : registerFormPart2}
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
		user: state.user
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
