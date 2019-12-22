import React, { Component } from 'react';
import './Event.css';
import ControlledCarousel from './EventCar.js';
import ReactFullpage from '@fullpage/react-fullpage';
import { Row, Col } from 'react-bootstrap';
export default class Event extends Component {
	render() {
		return (
			<div>
				<ReactFullpage
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section">
									<h1
										style={{
											position: 'absolute',
											zIndex: '2',
											left: '0',
											right: '0',
											backgroundColor: 'black',
											padding: '10px'
										}}
									>
										Events
									</h1>
									<ControlledCarousel />
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
			</div>
		);
	}
}
