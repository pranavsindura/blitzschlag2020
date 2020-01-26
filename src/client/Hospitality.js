import React, { Component } from 'react';
import './Hospitality.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Splash from './Splash';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import { Form, Col, Card, Table, Button, Row } from 'react-bootstrap';class Hospitality extends Component {
	state = {
		options: [],
		total: 0,
		optionsSelectedSet: new Set(),
		optionsSelected: '',
		redirect: false,
		redirectPay: false,
		redirectAmount: 0,
	};
	proxy = 'http://localhost:8080';
	amount = [0, 500, 500, 200, 200, 200, 500, 1200, 300, 300, 150, 400, 200, 200, 200];
	images = ['https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg'];
	componentWillMount() {
		let options = [null];
		for (let i = 0; i < 14; i++) options.push(false);
		this.setState({ options });
	}
	componentDidUpdate() {
		if (this.props.production) this.proxy = '';
	}
	handleChange = (e) => {
		let id = e.target.id;
		let val = Boolean(e.target.checked);
		let sig = val ? 1 : -1;
		let { options, total, optionsSelectedSet, optionsSelected } = this.state;
		if (val) {
			optionsSelectedSet.add(Number(id));
		} else {
			optionsSelectedSet.delete(Number(id));
		}
		optionsSelected = [...optionsSelectedSet].sort().join(' ');
		total += sig * this.amount[Number(id)];
		options[id] = val;
		this.setState({ options, total, optionsSelectedSet, optionsSelected },()=>{fullpage_api.reBuild();});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.props.loggedIn) {
			this.setState({ redirect: true });
		} else {
			let { total, optionsSelectedSet } = this.state;
			let packages = [...optionsSelectedSet];
			let amount = total;
			axios.post(this.proxy+'/addhospitality',{
				packages,
				blitzID: this.props.user.blitzID,
			})
			.then((res)=>{
				res = res.data;
				console.log(res);
				if(res.status)
				{
					//redirect to apt route.
					
					this.setState({ redirectPay: true, redirectAmount: amount });
					// this.shouldRedirectPay(amount);
					// console.log(amount);
					// axios.post(this.proxy+'/topayment',{amount, blitzID: this.props.user.blitzID})
					// .then((res)=>{
					// 	res = res.data;
					// 	console.log(res);
					// })
					// .catch((e)=>{alert('Some Error Occured!');})
				}
				else
				{
					alert('Some Error Occured!');
				}
			}).catch((e)=>{
				alert('Some Error Occured!');
				// console.log(e);
			})
			// alert('Payment Gateway is currently unavailable. Please use another mode of payment!');
			let options = [null];
			for (let i = 0; i < 14; i++) options.push(false);
			this.setState({
				options,
				total: 0,
				optionsSelectedSet: new Set(),
				optionsSelected: ''
			}); 
		}
	};
	shouldRedirect = () => {
		if (this.state.redirect) return <Redirect to="/login" />;
		else return null;
	};
	shouldRedirectPay = (amount) => {
		const {redirectAmount} = this.state;
		if (this.state.redirectPay) return <Redirect to={{
            pathname: '/payment',
            state: { amount: redirectAmount }
        }} />;
		else return null;
	};
	render() {
		const { options, total, optionsSelected } = this.state;
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
									{this.shouldRedirectPay()}
									<h1 className="hosp-heading heading">Hospitality</h1>
									<Form
										onSubmit={() => {
											this.handleSubmit(event);
										}}
									>
										<Card className="hosp-card">
											<Card.Body>
												<Table striped bordered hover responsive size="sm">
													<thead className="hosp">
														<tr>
															<th>#</th>

															<th>Option</th>
															<th>Amount</th>
															<th>Select</th>
														</tr>
													</thead>
													<tbody className="hosp">
														<br />
														{/* <tr>
															<td colSpan="1"></td>
															<td colSpan="1">
																<strong>Tax Chargeable</strong>
															</td>
															<td colSpan="2" />
														</tr> */}

														<tr>
															<td>1</td>

															<td>Pronite Day 1 and 2</td>
															<td>₹ 500/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="1"
																		type="checkbox"
																		checked={options[1]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>2</td>

															<td>Pronite Day 3</td>
															<td>₹ 500/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="2"
																		type="checkbox"
																		checked={options[2]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>3</td>

															<td>Event registration for Day 1</td>
															<td>₹ 200/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="3"
																		type="checkbox"
																		checked={options[3]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>4</td>

															<td>Event registration for Day 2</td>
															<td>₹ 200/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="4"
																		type="checkbox"
																		checked={options[4]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>5</td>

															<td>Event registration for Day 3</td>
															<td>₹ 200/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="5"
																		type="checkbox"
																		checked={options[5]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>6</td>

															<td>Event registration for 3 Days</td>
															<td>₹ 500/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="6"
																		type="checkbox"
																		checked={options[6]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>7</td>

															<td>Event registration + Pronites (All 3 Days)</td>
															<td>₹ 1200/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="7"
																		type="checkbox"
																		checked={options[7]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>8</td>

															<td>Event registration for Rambasamba</td>
															<td>₹ 300/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="8"
																		type="checkbox"
																		checked={options[8]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>9</td>

															<td>Event registration for Battle of Bands</td>
															<td>₹ 300/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="9"
																		type="checkbox"
																		checked={options[9]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>10</td>

															<td>Event registration for Panache</td>
															<td>₹ 150/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="10"
																		type="checkbox"
																		checked={options[10]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														{/* <tr>
															<td colSpan="1"></td>
															<td colSpan="1">
																<strong>Exempted from Taxation</strong>
															</td>
															<td colSpan="2" />
														</tr> */}
														<tr>
															<td>11</td>

															<td>Accomodation for 3 Days</td>
															<td>₹ 400/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="11"
																		type="checkbox"
																		checked={options[11]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>12</td>

															<td>Accomodation for Day 1</td>
															<td>₹ 200/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="12"
																		type="checkbox"
																		checked={options[12]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>13</td>

															<td>Accomodation for Day 2</td>
															<td>₹ 200/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="13"
																		type="checkbox"
																		checked={options[13]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
														<tr>
															<td>14</td>

															<td>Accomodation for Day 3</td>
															<td>₹ 200/-</td>
															<td>
																<Form.Group>
																	<Form.Check
																		id="14"
																		type="checkbox"
																		checked={options[14]}
																		onChange={() => {
																			this.handleChange(event);
																		}}
																	/>
																</Form.Group>
															</td>
														</tr>
													</tbody>
													<tfoot className="hosp">
														<tr>
															<td colSpan="4">
																<strong>
																	Note: Participants from MNIT, IIIT Kota, NIT UK are
																	exempted from the registration fee.
																</strong>
															</td>
														</tr>
													</tfoot>
												</Table>
											</Card.Body>
											<Card.Footer>
												<Row>
													<Col md={10} sm={9}>
														<Row>Total: ₹ {total}/-</Row>
														<Row>Options Selected: {optionsSelected}</Row>
													</Col>
													<Col md={2} sm={3}>
														<Row>
															{/* <Col md={4} sm="auto"> */}
															<Button type="submit">Pay Now</Button>
															{/* </Col> */}
														</Row>
													</Col>
												</Row>
											</Card.Footer>
										</Card>
									</Form>
									<br></br>
									<br></br>
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state)=>{
	return{
		loggedIn: state.loggedIn,
		user: state.user,
		production: state.production,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospitality);