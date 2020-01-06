<<<<<<< HEAD
import React, { Component } from "react";
import './main.css'
import TrackSlider from "./Trackslider"
export default class Event extends Component {
    state = {};
    render() {
        return(
            <div>
                <h1>Events</h1>
                <TrackSlider></TrackSlider>

            </div>
        );
    }
}
=======
import React, { Component } from 'react';
import './Event.css';
import ControlledCarousel from './EventCar.js';
import ReactFullpage from '@fullpage/react-fullpage';
import Splash from './Splash';
export default class Event extends Component {
	images = [
		'src/shared/img/lit.png',
		'src/shared/img/dra.png',
		'src/shared/img/fin.png',
		'src/shared/img/cul.png',
		'src/shared/img/gam.png',
		'src/shared/img/mus.png',
		'src/shared/img/pho.png',
	];
	render() {
		return (
			<div>
				<Splash images={this.images}/>
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
				</div>
		);
	}
}
>>>>>>> 409efefad3812e237a0f2e07056373eb707c2d9d
