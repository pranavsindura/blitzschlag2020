import React, { Component } from 'react';
import Home from './Home.js';
import Event from './event';
import './main.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class App extends Component {
	state = { moveto: null, checked: false };
	handleClick = (to) => {
		this.setState({ moveto: to, checked: false });
	};
	handleCheck = () => {
		this.setState({ moveto: null, checked: !this.state.checked });
	};
	render() {
		const { moveto, checked } = this.state;
		return (
			<Router>
				<div className="outer-menu">
					<input
						checked={checked}
						onChange={() => {}}
						onClick={() => {
							this.handleCheck();
						}}
						className="checkbox-toggle"
						type="checkbox"
					/>
					<div className="hamburger">
						<div></div>
					</div>
					<div className="menu">
						<div>
							<div>
								<ul>
									<li>
										<Link
											to="/"
											onClick={() => {
												this.handleClick('home');
											}}
										>
											Home
										</Link>
									</li>
									<li>
										<Link
											to="/flagship"
											onClick={() => {
												this.handleCheck();
											}}
										>
											Flagship Events
										</Link>
									</li>
									<li>
										<Link
											to="/events"
											onClick={() => {
												this.handleCheck();
											}}
										>
											Events
										</Link>
									</li>
									<li>
										<Link
											to="#"
											onClick={() => {
												this.handleCheck();
											}}
										>
											Schedule
										</Link>
									</li>
									<li>
										<Link
											to="#"
											onClick={() => {
												this.handleCheck();
											}}
										>
											Hospitality
										</Link>
									</li>
									<li>
										<Link
											to="#"
											onClick={() => {
												this.handleCheck();
											}}
										>
											Sponsors
										</Link>
									</li>
									<li>
										<Link
											to="/"
											onClick={() => {
												this.handleClick('contactus');
											}}
										>
											Contact Us
										</Link>
									</li>
									<li>
										<Link
											to="#"
											onClick={() => {
												this.handleCheck();
											}}
										>
											Our Team
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<Switch>
					<Route path="/events">
						<Event/>
					</Route>
					<Route path="/flagship">
						<Event/>
					</Route>
					<Route path="/">
						<Home moveto={moveto} />
					</Route>
				</Switch>
			</Router>
		);
	}
}
