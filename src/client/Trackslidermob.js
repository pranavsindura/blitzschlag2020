import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import disableScroll from 'disable-scroll';
import { Link } from 'react-router-dom';
import './TrackSliderMob.css';

export default class TrackSliderMob extends Component {
	state = {};
	render() {
		return (
			<Coverflow
				enableScroll={false}
				media={{
					'@media (max-width: 600px)': {
						width: '100%',
						height: '100vw'
					},
					'@media (min-width: 600px)': {
						width: '100%',
						height: '100vw'
					},
					'@media (min-width: 900px)': {
						width: '100%',
						height: '100vh'
					},
					'@media (min-width: 1200px)': {
						width: '100%',
						height: '100vh'
					}
				}}
				displayQuantityOfSide={1}
				navigation={false}
				enableHeading={false}
			>
				<div style={{ textAlign: 'center', display: 'block' }}>
					<img src="src/shared/img/litmob.png" alt="Album two" className="trackimgmob" />
				</div>
				<div style={{ textAlign: 'center' }}>
					<img src="src/shared/img/dramob.png" alt="Album two" className="trackimgmob" />
				</div>
				<div>
					<img src="src/shared/img/finmob.png" alt="Album two" className="trackimgmob" />
				</div>
				<div style={{ textAlign: 'center' }}>
					<img src="src/shared/img/cul.png" alt="Album two" className="trackimgmob" />
				</div>
				<div style={{ textAlign: 'center' }}>
					<img src="src/shared/img/gammob.png" alt="Album two" className="trackimgmob" />
				</div>
				<div style={{ textAlign: 'center' }}>
					<img src="src/shared/img/musmob.png" alt="Album two" className="trackimgmob" />
				</div>
				<div style={{ textAlign: 'center' }}>
					<img src="src/shared/img/phomob.png" alt="Album two" className="trackimgmob" />
				</div>
			</Coverflow>
		);
	}
}
