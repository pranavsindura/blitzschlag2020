import React, { Component } from 'react';
import './Event.css';
import ControlledCarousel from './EventCar.js';
import ReactFullpage from '@fullpage/react-fullpage';
import { Row, Col } from 'react-bootstrap';
export default class Event extends Component {
	render() {
		return (
				<ReactFullpage
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section">
									<h1 style={{
										position: 'absolute',
										zIndex:'2',
										backgroundColor:'black',
										color:"black",
										width: '100%',
										margin:'0',
										padding: '10px',
									}}>.</h1>
									<h1
										style={{
											position: 'absolute',
											zIndex: '3',
											left: '50%',
											transform: 'translateX(-50%)',
											padding: '10px',
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
		);
	}
}
