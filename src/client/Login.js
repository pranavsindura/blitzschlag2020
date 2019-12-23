import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Splash from './Splash';
import './Login.css';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';
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
export default class Login extends React.Component {
	state = {
		whichForm: true,
		registerDetails: registerDetailsTemplate,
		loginDetails: loginDetailsTemplate
	};
	images = ['https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg'];
	changeForm = () => {
		this.setState({
			whichForm: !this.state.whichForm,
			registerDetails: registerDetailsTemplate,
		    loginDetails: loginDetailsTemplate
		});
	};
	handleRegisterChange = (e) => {
		let newDetails = this.state.registerDetails;
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		newDetails[e.target.id] = value;
		this.setState({ registerDetails: newDetails });
	};
	handleRegisterSubmit = () => {
		const { registerDetails } = this.state;
		console.log(registerDetails);
		this.setState({
			registerDetails: registerDetailsTemplate
		});
	};
	handleLoginChange = (e) => {
		let newDetails = this.state.loginDetails;
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		newDetails[e.target.id] = value;
		this.setState({ loginDetails: newDetails });
	};
	handleLoginSubmit = () => {
		const { loginDetails } = this.state;
		console.log(loginDetails);
		this.setState({
			loginDetails: loginDetailsTemplate
		});
	};
	render() {
		const { registerDetails, loginDetails } = this.state;
		const registerForm = (
			<div className="section coverlogin">
				<h1 className="heading">Register</h1>
				<Card>
					<Card.Body>
						<Form>
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
							<Form.Group>
								<Form.Check
									onChange={() => {
										this.handleRegisterChange(event);
									}}
									defaultChecked={false}
									type="checkbox"
									id="isMNIT"
									label="Are you a student of MNIT/IIITK/NIT UK?"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Check
									onChange={() => {
										this.handleRegisterChange(event);
									}}
									defaultChecked={false}
									type="checkbox"
									id="accomodation"
									label="Do you need Accomodation?"
								/>
							</Form.Group>
							<Row>
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
		);
		const loginForm = (
			<div className="section coverlogin">
				<h1 className="heading">Login</h1>
				<Card>
					<Card.Body>
						<Form>
							<Form.Group>
								<Form.Control onChange={()=>{this.handleLoginChange(event)}} value={loginDetails.blitzID} id="blitzID" type="text" placeholder="Blitz ID" />
							</Form.Group>
							<Form.Group>
								<Form.Control onChange={()=>{this.handleLoginChange(event)}} value={loginDetails.blitzPIN} id="blitzPIN" type="password" placeholder="4 digit PIN" />
							</Form.Group>
							<Row>
								<Col>
									<Button onClick={()=>{this.handleLoginSubmit()}} variant="success">Submit</Button>
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
		);
		const { whichForm } = this.state;
		return (
			<div>
				<Splash images={this.images} />
				<ReactFullpage
					verticalCentered={true}
					scrollOverflow={true}
					render={({ state, fullpageApi }) => {
						return <ReactFullpage.Wrapper>{whichForm ? loginForm : registerForm}</ReactFullpage.Wrapper>;
					}}
				/>
			</div>
		);
	}
}
