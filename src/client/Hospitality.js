import React, { Component } from 'react';
import './Hospitality.css';
import ReactFullpage from '@fullpage/react-fullpage';
import Splash from './Splash';
import {Link} from 'react-router-dom';

export default class Hospitality extends Component {
	state = {};
	images = ['https://cdn.dodowallpaper.com/full/433/mandala-wallpaper-desktop-4.jpg'];
	render() {
		return (
			<div>
				<Splash images={this.images} />
				<a href="https://blitz20.herokuapp.com/"> 
					<img
						style={{
							height: 'auto',
							width: '70px',
							position: 'fixed',
							left: '0%',
							top: '0%',
							zIndex: '1'
						}}
						src="https://i.ibb.co/42WZWbr/blitzlogo.png"
					/>
				</a>
				<ReactFullpage
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section">
									<h1
										style={{
											position: 'absolute',
											zIndex: '2',
											backgroundColor: 'black',
											color: 'black',
											width: '100%',
											margin: '0',
											padding: '10px'
										}}
									>
										.
									</h1>
									<h1
										style={{
											position: 'absolute',
											zIndex: '3',
											left: '50%',
											transform: 'translateX(-50%)',
											padding: '10px'
										}}
									>
										Hospitality
									</h1>
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
			</div>
		);
	}
}
