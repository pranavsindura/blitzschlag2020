import React, { Component } from 'react';
import './Event.css';
import ControlledCarousel from './EventCar.js';
import ReactFullpage from '@fullpage/react-fullpage';
export default class Event extends Component {
	render() {
		return (
				<ReactFullpage
					scrollingSpeed={1000}
					verticalCentered={true}
					touchSensitivity={15}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section">
									<h1>Events</h1>
									<ControlledCarousel />
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
		);
	}
}
