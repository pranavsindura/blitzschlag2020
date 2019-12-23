import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { USER } from '../shared/usertest.js';
import './Myaccount.css';
import ReactFullpage from '@fullpage/react-fullpage';
{/* <link href="https://fonts.googleapis.com/css?family=Gothic+A1&display=swap" rel="stylesheet"></link>; */}
export default class Myaccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: USER
		};
	}
	renderDetails(user) {
		return (
			<div>
				<h3 className="words">
					Blitz ID: {this.state.user.blitzID}
					<br></br>College ID: {this.state.user.collegeID}
					<br></br>
					Email ID: {this.state.user.email}
					<br></br>
					Phone Number: {this.state.user.mob}
					<br></br>
					{this.renderTransaction(this.state.user)}
				</h3>
			</div>
		);
	}
	renderTransaction(user) {
		var trans = user.transactionID;
		if (user.transactionID == null) {
			trans = 'not yet payed';
		}
		var acc = user.accomodation;
		if (user.accomodation == false) {
			acc = 'no';
		} else {
			acc = 'yes';
		}
		if (user.isMNIT == false) {
			return (
				<div>
					Accomodation needed: {acc}
					<br></br>
					Transzction ID: {trans}
				</div>
			);
		} else return <div></div>;
	}
	renderEventsPC(events) {
		if (window.innerWidth > 760) {
			if (events != null) {
				return (
					<div className="eve">
						<h4>Participated Events</h4>
						<hr></hr>
						<ul className="list-unstyled">
							{events.map((event) => {
								return (
									<li key={event.id}>
										<p className="evelist">{event.name}</p>
										{this.renderEventDetails(event)}
										<hr></hr>
									</li>
								);
							})}
						</ul>
					</div>
				);
			}
		}
	}
	renderEventsMOB(events) {
		if (window.innerWidth < 760) {
			if (events != null) {
				return (
					<div className="eve">
						<h4>Participated Events</h4>
						<hr></hr>
						<ul className="list-unstyled">
							{events.map((event) => {
								return (
									<li key={event.teamId}>
										<p className="evelist">{event.name}</p>
										{this.renderEventDetails(event)}
										<hr></hr>
									</li>
								);
							})}
						</ul>
					</div>
				);
			}
		}
	}
	renderEventDetails(event) {
		if (event.teamSize > 1) {
			return (
				<div className="row evedet">
					<p className="col-6">{event.teamName}</p>
					<p className=" col-6 right">{event.teamId}</p>
				</div>
			);
		}
	}
	render() {
		return (
			<ReactFullpage
				scrollOverflow={true}
				render={({ state, fullpageApi }) => {
					return (
						<ReactFullpage.Wrapper>
							<div className="section cont">
								<Jumbotron>
									<h1>My Account</h1>
									<div className="boxi green">{this.renderEventsPC(this.state.user.events)}</div>
								</Jumbotron>
								<div className="pro row ">
									<div className="col-md-2 profile">
										<img src="src/shared/img/user.png"></img>
									</div>
									<div className="col-md-9 name">
										<h2 className="words">
											{this.state.user.firstName} {this.state.user.lastName}
										</h2>
										<p className="words">{this.state.user.college}</p>
									</div>
								</div>
								<br></br>
								<div className="inf row">{this.renderDetails(this.state.user)}</div>
								<div className="evemob col-12">{this.renderEventsMOB(this.state.user.events)}</div>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		);
	}
}
