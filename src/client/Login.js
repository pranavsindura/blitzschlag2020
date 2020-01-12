import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// import 'fullpage.js/vendors/scrolloverflow';
import Splash from './Splash';
import './Login.css';
import { Form, Button, Card, Col, Row, Alert, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Sky from 'react-sky';

const registerDetailsTemplate = {
	firstName: '',
	lastName: '',
	email: '',
	mob: '',
	collegeType: '0',
	college: 'MNIT',
	collegeID: '',
	year: 'I',
	city: '',
	course: 'B-Tech',
	gender: 'Male',
	branch: '',
	blitzPIN: '',
	isMNIT: true,
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
		registerDetails: {
			...registerDetailsTemplate
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
	images = ['https://i.ibb.co/0m0GPR5/64-PERSONALIZED-MOBILE-PHONE-WALLPAPER-IDEAS-Page-48-of-64-Lialip.png'];
	changeForm = (fullpageApi) => {
		// fullpageApi.reBuild();
		this.setState(
			{
				whichForm: !this.state.whichForm,
				submitMessage: '',
				registerDetails: {
					...registerDetailsTemplate
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
		// console.log(e.target.id, e.target.value, '<-', typeof e.target.value);
		if (e.target.id === 'college') {
			if (newDetails.collegeType == 0) value = 'MNIT';
			else if (newDetails.collegeType == 1) value = 'IIIT Kota';
			else if (newDetails.collegeType == 2) value = 'NIT UK';
		}
		if (e.target.id === 'collegeType') {
			if (value === '0') (newDetails['college'] = 'MNIT'), (newDetails['isMNIT'] = true);
			else if (value === '1') (newDetails['college'] = 'IIIT Kota'), (newDetails['isMNIT'] = true);
			else if (value === '2') (newDetails['college'] = 'NIT UK'), (newDetails['isMNIT'] = true);
			else (newDetails['college'] = ''), (newDetails['isMNIT'] = false);
		}
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
		// console.log(registerDetails);
		axios
			.post(this.proxy + '/signup', registerDetails)
			.then((res) => {
				res = res.data;
				// console.log(res);
				if (res.status) {
					alert(`You are registered! Your BlitzID: blitz20@${res.data.blitzID}`);

					// console.log(res.data);
					this.setState(
						{
							submitMessage: (
								<Col>
									<Col>
										<p className="text-white">You are successfully Registered!</p>
									</Col>
									<Col>
										<p className="text-white font-weight-bold">
											Your BlitzID: blitz20@{res.data.blitzID}
										</p>
									</Col>
								</Col>
							),
							registerDetails: {
								...registerDetailsTemplate
							}
						},
						() => {
							fullpage_api.reBuild();
						}
					);
				} else {
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
		// console.log(this.proxy);
		event.preventDefault();
		const { loginDetails } = this.state;
		// console.log(loginDetails);
		axios
			.post(this.proxy + '/login', loginDetails)
			.then((res) => {
				res = res.data;
				// console.log(res);
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
	render() {
		if (this.props.loggedIn) {
			return <Redirect to="/myaccount" />;
		}
		const { registerDetails, loginDetails, submitMessage } = this.state;
		const registerForm = (
			<div className="section coverlogin">
				<div className="img-wrap">
					<img src="https://i.ibb.co/hfH0yHM/loginc1.png" className="loginc1" />
					<img src="https://i.ibb.co/Wpt36Ft/loginc2.png" className="loginc2" />
				</div>
				<div className="formwrapper">
					<h1 className="heading">REGISTER</h1>
					<Card>
						<Card.Body>
							<Form
								onSubmit={() => {
									this.handleRegisterSubmit(event);
								}}
							>
								<Form.Row>
									<Col>
										<Form.Label>First Name:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<Form.Control
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													value={registerDetails.firstName}
													id="firstName"
													type="text"
													required={true}
													placeholder=""
												/>
											</Form.Group>
										</Form.Row>
									</Col>

									<Col>
										<Form.Label>Last Name:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<Form.Control
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													value={registerDetails.lastName}
													id="lastName"
													type="text"
													required={true}
													placeholder=""
												/>
											</Form.Group>
										</Form.Row>
									</Col>
								</Form.Row>

								<Form.Row>
									<Col>
										<Form.Label>Email:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<Form.Control
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													value={registerDetails.email}
													id="email"
													type="email"
													required={true}
													placeholder=""
												/>
											</Form.Group>
										</Form.Row>
									</Col>

									<Col>
										<Form.Label>Mobile Number:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<Form.Control
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													value={registerDetails.mob}
													id="mob"
													type="phone"
													required={true}
													placeholder=""
												/>
											</Form.Group>
										</Form.Row>
									</Col>
								</Form.Row>

								<Form.Row>
									<Col>
										<Form.Label>Gender:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<select
													// style={{ minWidth: '100%' }}
													id="gender"
													value={registerDetails.gender}
													onChange={() => {
														this.handleRegisterChange(event);
													}}
												>
													<option value="Male">Male</option>
													<option value="Female">Female</option>
													<option value="Others">Others</option>
												</select>
											</Form.Group>
										</Form.Row>
									</Col>
									<Col>
										<Form.Label>PIN(4 Digits):&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<Form.Control
													value={registerDetails.blitzPIN}
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													required={true}
													id="blitzPIN"
													type="password"
													placeholder=""
												/>
											</Form.Group>
										</Form.Row>
									</Col>
								</Form.Row>

								<Form.Row>
									<Col>
										<Form.Label>College:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<select
													id="collegeType"
													value={registerDetails.collegeType}
													onChange={() => {
														this.handleRegisterChange(event);
													}}
												>
													<option value="0">MNIT</option>
													<option value="1">IIIT Kota</option>
													<option value="2">NIT UK</option>
													<option value="3">Others</option>
												</select>
											</Form.Group>
										</Form.Row>
									</Col>
									<Col>
										<Form.Label>College Name:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<Form.Control
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													disabled={registerDetails.collegeType != 3}
													value={registerDetails.college}
													id="college"
													type="text"
													required={true}
													placeholder=""
												/>
											</Form.Group>
										</Form.Row>
									</Col>
								</Form.Row>

								<Form.Row>
									<Col>
										<Form.Label>Course:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<select
													id="course"
													value={registerDetails.course}
													onChange={() => {
														this.handleRegisterChange(event);
													}}
												>
													<option value="B-Tech">B-Tech</option>
													<option value="B-Arch">B-Arch</option>
													<option value="Ph.D.">Ph.D.</option>
													<option value="M-Tech">M-Tech</option>
													<option value="M-Plan">M-Plan</option>
													<option value="Others">Others</option>
												</select>
											</Form.Group>
										</Form.Row>
									</Col>
									<Col>
										<Form.Label>College ID:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<Form.Control
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													value={registerDetails.collegeID}
													id="collegeID"
													type="text"
													required={true}
													placeholder=""
												/>
											</Form.Group>
										</Form.Row>
									</Col>
								</Form.Row>

								<Form.Row>
									<Col>
										<Form.Label>Year:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<select
													id="year"
													value={registerDetails.year}
													onChange={() => {
														this.handleRegisterChange(event);
													}}
												>
													<option value="I">I</option>
													<option value="II">II</option>
													<option value="III">III</option>
													<option value="IV">IV</option>
													<option value="V">V</option>
													<option value="Others">Others</option>
												</select>
											</Form.Group>
										</Form.Row>
									</Col>
									<Col>
										<Form.Label>Branch:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<Form.Control
													value={registerDetails.branch}
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													required={true}
													id="branch"
													type="text"
													placeholder=""
												/>
											</Form.Group>
										</Form.Row>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col>
										<fieldset>
											<Form.Group>
												<Form.Label>Do you need Accomodation?</Form.Label>
												<Form.Row>
													<Col style={{ textAlign: 'center' }}>
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
													<Col style={{ textAlign: 'center' }}>
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
									</Col>
									<Col>
										<Form.Label>City:&nbsp;&nbsp;</Form.Label>
										<Form.Row>
											<Form.Group>
												<Form.Control
													value={registerDetails.city}
													onChange={() => {
														this.handleRegisterChange(event);
													}}
													required={true}
													id="city"
													type="text"
													placeholder=""
												/>
											</Form.Group>
										</Form.Row>
									</Col>
								</Form.Row>
								<Row>
									<Col>
										<Button className="submit-button" type="submit">
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
											className="already-link"
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
				<div className="img-wrap">
					<img src="https://i.ibb.co/hfH0yHM/loginc1.png" className="loginc1" />
					<img src="https://i.ibb.co/Wpt36Ft/loginc2.png" className="loginc2" />
				</div>
				<div
					className="formwrapper"
					// style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}
				>
					{/* <img src="src/shared/img/loginc2.png" className="loginc2" /> */}
					<h1 className="heading">LOGIN</h1>
					<Card>
						<Card.Body>
							<Form
								onSubmit={() => {
									this.handleLoginSubmit(event);
								}}
							>
								<Form.Row>
									<Col md={{ span: 6, offset: 3 }}>
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
													placeholder="ID"
												/>
											</InputGroup>
										</Form.Group>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col md={{ span: 6, offset: 3 }}>
										<Form.Group>
											<Form.Control
												onChange={() => {
													this.handleLoginChange(event);
												}}
												value={loginDetails.blitzPIN}
												id="blitzPIN"
												type="password"
												required={true}
												placeholder="PIN"
											/>
										</Form.Group>
									</Col>
								</Form.Row>
								<Row>
									<Col>
										<Button className="submit-button" type="submit">
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
											className="already-link"
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
				<Link to="https://blitz20.herokuapp.com/">
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
				</Link>
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
								{/* <Sky
									images={{
										0: 'https://i.imgur.com/eVjW01Z.gif'
									}}
									how={50}
									time={40}
									size={'100px'}
									background={'url("https://imgur.com/iVUKgex.jpg")'}
								/> */}
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
