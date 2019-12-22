import React, { Component } from 'react';
import Home from './Home.js';
import Event from './event';
import CategoryEvent from './CategoryEvent';
import './main.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createHashHistory as createHistory } from 'history';
import FadeIn from 'react-fade-in';

let history = createHistory();
export default class App extends Component {
	state = { moveto: null, checked: false };
	handleClick = (to) => {
		this.setState({ moveto: to, checked: false });
	};
	handleCheck = () => {
		this.setState({ checked: !this.state.checked });
	};
	render() {
		const { moveto, checked } = this.state;
		return (
			<Router history={history}>
				<div
					className="backbutton"
					onClick={() => {
						history.goBack();
					}}
				>
					<svg
						version="1.1"
						id="Capa_1"
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="30px"
						height="30px"
						viewBox="0 0 306 306"
						style={{ enableBackground: 'new 0 0 306 306' }}
					>
						<g id="chevron-left">
							<polygon
								style={{ stroke: '#D80035', strokeWidth: '20px', fill: 'white' }}
								points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"
							/>
						</g>
					</svg>
				</div>

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
											style={{ textDecoration: 'none', color: 'white' }}
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
											style={{ textDecoration: 'none', color: 'white' }}
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
											style={{ textDecoration: 'none', color: 'white' }}
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
											style={{ textDecoration: 'none', color: 'white' }}
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
											style={{ textDecoration: 'none', color: 'white' }}
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
											style={{ textDecoration: 'none', color: 'white' }}
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
											style={{ textDecoration: 'none', color: 'white' }}
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
											style={{ textDecoration: 'none', color: 'white' }}
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
					<Route path="/events/category">
						<FadeIn>
							<CategoryEvent />
						</FadeIn>
					</Route>
					<Route path="/events">
						<FadeIn>
							<Event />
						</FadeIn>
					</Route>
					<Route path="/flagship">
						<FadeIn>
							<Event />
						</FadeIn>
					</Route>
					<Route path="/">
						<FadeIn>
							<div className="downbutton b1">
								<svg
									version="1.1"
									id="Capa_1"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="30px"
									height="30px"
									viewBox="0 0 306 306"
									style={{ enableBackground: 'new 0 0 306 306' }}
								>
									<g id="chevron-left">
										<polygon
											style={{ stroke: '#D80035', strokeWidth: '10px', fill: 'white' }}
											points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"
										/>
									</g>
								</svg>
							</div>
							<div className="downbutton b2">
								<svg
									version="1.1"
									id="Capa_1"
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="30px"
									height="30px"
									viewBox="0 0 306 306"
									style={{ enableBackground: 'new 0 0 306 306' }}
								>
									<g id="chevron-left">
										<polygon
											style={{ stroke: '#D80035', strokeWidth: '10px', fill: 'white' }}
											points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"
										/>
									</g>
								</svg>
							</div>
							<Home moveto={moveto} />
						</FadeIn>
					</Route>
				</Switch>
			</Router>
		);
	}
}
