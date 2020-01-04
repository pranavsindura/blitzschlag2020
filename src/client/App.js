import React, { Component } from 'react';
import Home from './Home.js';
import Event from './event';
import CategoryEvent from './CategoryEvent';
import Myaccount from './UserMyaccount.js';
import Team from './Team.js';
import Sponsors from './Sponsors.js';
import Hospitality from './Hospitality.js';
import GetTickets from './GetTickets.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
	handleOpen = (state)=>{
		console.log(state.isOpen);
		this.setState({checked: state.isOpen});
		// return state.isOpen;
	}
	render() {
		const { moveto, checked } = this.state;
		return (
			<Router history={history}>
				<div className="myBox">
					<Menu right disableAutoFocus noOverlay isOpen={checked} onStateChange={(state)=> this.handleOpen(state)}>
						<ul style={{ listStyleType: 'none' }}>
							<li className="lis menu-item">
								<Link
								className="lisitem"
									to="/"
									onClick={() => {
										this.handleClick('home');
									}}
								>
									HOME
								</Link>
							</li>
							<li className="lis  menu-item">
								<Link className="lisitem" to="/events" onClick={() => {
                this.handleCheck();
              }}>EVENTS</Link>
							</li>
							{this.props.loggedIn ? (
								<li className="lis menu-item">
									<Link className="lisitem" to="/myaccount" onClick={() => {
                this.handleCheck();
              }}>MY ACCOUNTS</Link>
								</li>
							) : (
								<li className="lis menu-item">
									<Link className="lisitem" to="/login" onClick={() => {
                this.handleCheck();
              }}>LOGIN | REGISTER</Link>
								</li>
							)}

							<li className="lis menu-item">
								<Link className="lisitem" to="/gettickets" onClick={() => {
                this.handleCheck();
              }}>GET TICKETS</Link>
							</li>
							<li className="lis menu-item">
								<Link className="lisitem" to="/hospitality" onClick={() => {
                this.handleCheck();
              }}>HOSPITALITY</Link>
							</li>
							<li className="lis menu-item">
								<Link className="lisitem" to="/sponsors" onClick={() => {
                this.handleCheck();
              }}>SPONSORS</Link>
							</li>
							<li className="lis menu-item">
								<Link
								className="lisitem"
									to="/"
									onClick={() => {
										this.handleClick('contactus');
									}}
								>
									CONTACT US
								</Link>
							</li>
							<li className="lis menu-item">
								<Link className="lisitem" to="/team">OUR TEAM</Link>
							</li>
							{this.props.loggedIn ? (
								<li className="lis menu-item">
									<Link
									className="lisitem"
										to="/"
										onClick={() => {
											this.handleLogout();
										}}
									>
										LOGOUT
									</Link>
								</li>
							) : null}
						</ul>
					</Menu>
					{/* <div className="outer-menu">
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
                <div className="inmenu" style={{ width: "100%" }}>
                  <ul>
                    <li>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/"
                        onClick={() => {
                          this.handleClick("home");
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/events"
                        onClick={() => {
                          this.handleCheck();
                        }}
                      >
                        Events
                      </Link>
                    </li>
                    {this.props.loggedIn ? (
                      <li>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/myaccount"
                          onClick={() => {
                            this.handleCheck();
                          }}
                        >
                          My Account
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/login"
                          onClick={() => {
                            this.handleCheck();
                          }}
                        >
                          Login | Register
                        </Link>
                      </li>
                    )}

                    <li>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/gettickets"
                        onClick={() => {
                          this.handleCheck();
                        }}
                      >
                        Get Tickets
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/hospitality"
                        onClick={() => {
                          this.handleCheck();
                        }}
                      >
                        Hospitality
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/sponsors"
                        onClick={() => {
                          this.handleCheck();
                        }}
                      >
                        Sponsors
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/"
                        onClick={() => {
                          this.handleClick("contactus");
                        }}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/team"
                        onClick={() => {
                          this.handleCheck();
                        }}
                      >
                        Our Team
                      </Link>
                    </li>
                    {this.props.loggedIn ? (
                      <li>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="#"
                          onClick={() => {
                            this.handleLogout();
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

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
												style={{
													stroke: '#D80035',
													strokeWidth: '10px',
													fill: 'white'
												}}
												points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153       "
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
												style={{
													stroke: '#D80035',
													strokeWidth: '10px',
													fill: 'white'
												}}
												points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153       "
											/>
										</g>
									</svg>
								</div>
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
