import React, { Component } from 'react';
import './Event.css';
import ControlledCarousel from './EventCar.js';
import ReactFullpage from '@fullpage/react-fullpage';
import { Row, Col } from 'react-bootstrap';
export default class Event extends Component {
	render() {
		return (
			<div>
					<h1 style={{position: 'absolute', zIndex:'1', left:'0', right:'0', backgroundColor:"black", padding:'10px'}}>Events</h1>
				<ControlledCarousel />
			</div>
		);
	}
}
