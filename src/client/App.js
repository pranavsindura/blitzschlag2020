import React, { Component } from 'react';
import Home from './Home.js';
import Society from './Society';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './Event';
import Myaccount from './UserMyaccount.js';
import Team from './Team.js';
import Flagship from './Flagship';
import Sponsors from './Sponsors.js';
import Hospitality from './Hospitality.js';
import GetTickets from './GetTickets.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { createHashHistory as createHistory } from 'history';
import FadeIn from 'react-fade-in';
import { slide as Menu } from 'react-burger-menu';

import Login from './Login';
import { connect } from 'react-redux';

let history = createHistory();
class App extends Component {
	state = { moveto: null, checked: false };
	handleClick = (to) => {
		this.setState({ moveto: to, checked: false });
	};
	handleCheck = () => {
		this.setState({ checked: !this.state.checked });
	};
	handleLogout = () => {
		this.props.LOGOUT();
		this.handleCheck();
	};
	handleOpen = (state) => {
		// console.log(state.isOpen);
		this.setState({ checked: state.isOpen });
		// return state.isOpen;
	};
	render() {
		const { moveto, checked } = this.state;
		return (
			<Router history={history}>
				<div className="myBox">
					<Menu
						right
						disableAutoFocus
						noOverlay
						isOpen={checked}
						onStateChange={(state) => this.handleOpen(state)}
					>
						<ul style={{ listStyleType: 'none' }}>
							<li className="lis menu-item">
								<a
									className="lisitem"
									href="http://www.blitzschlag.co.in/"
									// onClick={() => {
									// 	this.handleClick('home');
									// 	// this.handleCheck();
									// }}
								>
									<i className="fas fa-home"></i>&nbsp;&nbsp;HOME
								</a>
							</li>
							<li className="lis  menu-item">
								<Link
									className="lisitem"
									to="/flagship"
									onClick={() => {
										this.handleCheck();
									}}
								>
									<i className="fas fa-glass-cheers"></i>&nbsp;&nbsp;FLAGSHIP EVENTS
								</Link>
							</li>
							<li className="lis  menu-item">
								<Link
									className="lisitem"
									to="/society"
									onClick={() => {
										this.handleCheck();
									}}
								>
									<i className="far fa-calendar-alt"></i>&nbsp;&nbsp;EVENTS
								</Link>
							</li>
							{this.props.loggedIn ? (
								<li className="lis menu-item">
									<Link
										className="lisitem"
										to="/myaccount"
										onClick={() => {
											this.handleCheck();
										}}
									>
										<i className="far fa-user"></i>&nbsp;&nbsp;MY ACCOUNT
									</Link>
								</li>
							) : (
								<li className="lis menu-item">
									<Link
										className="lisitem"
										to="/login"
										onClick={() => {
											this.handleCheck();
										}}
									>
										<i className="far fa-user"></i>&nbsp;&nbsp;LOGIN | REGISTER
									</Link>
								</li>
							)}

							<li className="lis menu-item">
								<Link
									className="lisitem"
									to="/gettickets"
									onClick={() => {
										this.handleCheck();
									}}
								>
									<i className="fas fa-ticket-alt"></i>&nbsp;&nbsp;GET TICKETS
								</Link>
							</li>
							<li className="lis menu-item">
								<Link
									className="lisitem"
									to="/hospitality"
									onClick={() => {
										this.handleCheck();
									}}
								>
									<i className="fas fa-hotel"></i>&nbsp;&nbsp;HOSPITALITY
								</Link>
							</li>
							<li className="lis menu-item">
								<Link
									className="lisitem"
									to="/sponsors"
									onClick={() => {
										this.handleCheck();
									}}
								>
									<i className="fas fa-money-bill-wave"></i>&nbsp;&nbsp;SPONSORS
								</Link>
							</li>
							<li className="lis menu-item">
								<Link
									className="lisitem"
									to="/#contactus"
									onClick={() => {
										this.handleClick('contactus');
										// this.handleCheck();
									}}
								>
									<i className="fas fa-phone-alt"></i>&nbsp;&nbsp;CONTACT US
								</Link>
							</li>
							<li className="lis menu-item">
								<Link
									className="lisitem"
									to="/team"
									onClick={() => {
										this.handleClick('contactus');
										// this.handleCheck();
									}}
								>
									<i className="far fa-handshake"></i>&nbsp;&nbsp;OUR TEAM
								</Link>
							</li>
							{this.props.loggedIn ? (
								<li className="lis menu-item">
									<a
										className="lisitem"
										href="http://www.blitzschlag.co.in/"
										onClick={() => {
											this.handleLogout();
										}}
									>
										<i className="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;LOGOUT
									</a>
								</li>
							) : null}
						</ul>
					</Menu>
					<Switch>
						<Route
							path="/events/:eventType"
							render={(props) => (
								<FadeIn>
									
									<Event {...props} />
									
								</FadeIn>
							)}
						></Route>
						<Route exact path="/society">
							<FadeIn>
								<Society />
							</FadeIn>
						</Route>
						<Route path="/flagship">
							<FadeIn>
								<Flagship />
							</FadeIn>
						</Route>
						<Route path="/myaccount">
							<FadeIn>
								<Myaccount />
							</FadeIn>
						</Route>
						<Route path="/login">
							<FadeIn>
								<Login />
							</FadeIn>
						</Route>
						<Route path="/team">
							<FadeIn>
								<Team />
							</FadeIn>
						</Route>
						<Route path="/sponsors">
							<FadeIn>
								<Sponsors />
							</FadeIn>
						</Route>
						<Route path="/hospitality">
							<FadeIn>
								<Hospitality />
							</FadeIn>
						</Route>
						<Route path="/gettickets">
							<FadeIn>
								<GetTickets />
							</FadeIn>
						</Route>
						<Route path="/">
							<FadeIn>
								<Home moveto={moveto} />
							</FadeIn>
						</Route>
					</Switch>
				</div>
			</Router>
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
		LOGOUT: () => {
			dispatch({ type: 'LOGOUT' });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
