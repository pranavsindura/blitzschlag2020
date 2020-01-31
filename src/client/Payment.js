import React, { Component } from 'react';
import './Payment.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Splash from './Splash';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Form, Col, Card, Table, Button, Row } from 'react-bootstrap';
class Payment extends Component {
	state = {
		amount: 0,
		transactionID: '',
		redirect: false
	};
	proxy = 'http://localhost:8080';
	images = ['https://i.ibb.co/FwCh5v1/paymentmode.jpg'];
	componentDidUpdate() {
		if (this.props.production) this.proxy = '';
		// console.log(this.state);
	}
	componentDidMount() {
		// console.log(this.props.location);
		if(this.props.location.state === undefined)
		    this.setState({redirect: true});
		else
		this.setState({amount: this.props.location.state.amount})
		// this.setState({ amount: 500 });
	}
	handleChange = (e) => {
		let id = e.target.id;
		let val = e.target.value;
		let state = this.state;
		state[id] = val;
		this.setState({ ...state }, () => {
			fullpage_api.reBuild();
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.props.loggedIn) {
			this.setState({ redirect: true });
		} else {
            // console.log(this.state);
            const {amount, transactionID} = this.state;
            let details = {
                blitzID: this.props.user.blitzID,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                mob: this.props.user.mob,
                email: this.props.user.email,
                amount,
                transactionID
            };
            axios.post(this.proxy+'/upipayments',details).then(res=>{
                res = res.data;
                if(res.status)
                {
                    alert('Entry Recorded!');
                    this.setState({redirect: true});
                }
                else{
                    alert('Please Try Again!');
                }
            }).catch(e=>{
                alert('Experiencing Network Issues!');
            })
        }
        this.setState({ transactionID: '' });
	};
	shouldRedirect = () => {
		if (this.state.redirect) return <Redirect to="/login" />;
		if (this.state.redirect || this.props.location.state === undefined) return <Redirect to="/login" />;
		else return null;
		// return null;
	};
	render() {
		const { amount, transactionID } = this.state;
		return (
			<div>
				<Splash images={this.images} />
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
					verticalCentered={false}
					scrollOverflow={true}
					scrollOverflowOptions={{
						click: false,
						preventDefaultException: { tagName: /.*/ }
					}}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section" style={{ backgroundColor: 'powderblue' }}>
									{this.shouldRedirect()}
									<h1 className="hosp-heading heading">Payment</h1>
									{/* <div className="pay-left"> */}
									<Row>
										<Col md={6}>
											<div className="pay-mode-img-container">
												<img
													src={'https://i.ibb.co/bsSdRJ3/fin.jpg'}
													className="pay-mode-img"
													onLoad={() => {
														fullpage_api.reBuild();
													}}
												/>
											</div>
										</Col>
										{/* </div> */}
										{/* <div className="pay-right"> */}
										<Col md={6}>
											<Form
												onSubmit={() => {
													this.handleSubmit(event);
												}}
											>
												<Card className="pay-card">
													<Card.Body>
														<Form.Group>
															<Form.Label>Amount: </Form.Label>
															<Form.Control
																onChange={() => {
																	this.handleChange(event);
																}}
																value={amount}
																id="amount"
																type="text"
																required={true}
																disabled={true}
															/>
															<Form.Label>Transaction ID: </Form.Label>
															<Form.Control
																onChange={() => {
																	this.handleChange(event);
																}}
																value={transactionID}
																id="transactionID"
																type="text"
																required={true}
															/>
														</Form.Group>
														<Form.Group>
															<Button type="submit">Submit</Button>
														</Form.Group>
													</Card.Body>
													<Card.Footer>
														Note: PayTM, Google Pay, and PhonePe are the accepted payment methods.
													</Card.Footer>
												</Card>
											</Form>
										</Col>
									</Row>
									{/* </div> */}
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
		user: state.user,
		production: state.production
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
