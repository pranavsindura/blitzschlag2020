import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import disableScroll from 'disable-scroll';
import { Link } from 'react-router-dom';
export default class TrackSlider extends Component {
	render() {
		return (
			<Coverflow
				enableScroll={false}
				media={{
					'@media (min-width: 10px)': {
						width: '100%',
						height: '150vw'
					},
					'@media (min-width: 300px)': {
						width: '100%',
						height: '125vw'
					},
					'@media (min-width: 600px)': {
						width: '100%',
						height: '60vw'
					},
					'@media (min-width: 900px)': {
						width: '100%',
						height: '50vw'
					},
					'@media (min-width: 1200px)': {
						width: '100%',
						height: '40vw'
					}
				}}
				displayQuantityOfSide={1}
				navigation={false}
				enableHeading={false}
			>
				<div>
					<img
						className="img-responsive"
						src="src/shared/img/lit.png"
						alt="Album two"
						data-action="http://passer.cc"
						style={{ display: 'block', width: '100%', height: '100%' }}
					/>

					<div className="carousel-caption">
						<Link to="/events/category" style={{ textDecoration: 'none', color: 'white' }}>
							<h1>Literary</h1>
						</Link>
						{/* <br></br>
            <br></br> */}
					</div>
				</div>
				<div>
					<img
						className="img-responsive"
						src="src/shared/img/dra.png"
						alt="Album two"
						data-action="www.google.com"
						style={{ display: 'block', width: '100%', height: '100%' }}
						media={{
							'@media (min-width: 10px)': {
								width: '100%',
								height: '150vw'
							}
						}}
					/>
					<div className="carousel-caption">
						<Link to="/events/category" style={{ textDecoration: 'none', color: 'white' }}>
							<h1>Dramatics</h1>
						</Link>
						{/* <br></br>
            <br></br> */}
					</div>
				</div>
				<div>
					<img
						className="img-responsive"
						src="src/shared/img/fin.png"
						alt="Album two"
						data-action="http://passer.cc"
						style={{ display: 'block', width: '100%', height: '100%' }}
					/>
					<div className="carousel-caption">
						<Link to="/events/category" style={{ textDecoration: 'none', color: 'white' }}>
							<h1>Fine-Arts</h1>
						</Link>
						{/* <br></br>
              <br></br> */}
					</div>
				</div>
				<div>
					<img
						className="img-responsive"
						src="src/shared/img/cul.png"
						alt="Album two"
						data-action="http://passer.cc"
						style={{ display: 'block', width: '100%', height: '100%' }}
					/>
					<div className="carousel-caption">
						<Link to="/events/category" style={{ textDecoration: 'none', color: 'white' }}>
							<h1>Cultural</h1>
						</Link>
						{/* <br></br>
              <br></br> */}
					</div>
				</div>
				<div>
					<img
						className="img-responsive"
						src="src/shared/img/gam.png"
						alt="Album two"
						data-action="http://passer.cc"
						style={{ display: 'block', width: '100%', height: '100%' }}
					/>
					<div className="carousel-caption">
						<Link to="/events/category" style={{ textDecoration: 'none', color: 'white' }}>
							<h1>Lan Gaming</h1>
						</Link>
						{/* <br></br>
              <br></br> */}
					</div>
				</div>
				<div>
					<img
						className="img-responsive"
						src="src/shared/img/mus.png"
						alt="Album two"
						data-action="http://passer.cc"
						style={{ display: 'block', width: '100%', height: '100%' }}
					/>
					<div className="carousel-caption">
						<Link to="/events/category" style={{ textDecoration: 'none', color: 'white' }}>
							<h1>Music</h1>
						</Link>
						{/* <br></br>
              <br></br> */}
					</div>
				</div>
				<div>
					<img
						className="img-responsive"
						src="src/shared/img/pho.png"
						alt="Album two"
						data-action="http://passer.cc"
						style={{ display: 'block', width: '100%', height: '100%' }}
					/>
					<div className="carousel-caption">
						<Link to="/events/category" style={{ textDecoration: 'none', color: 'white' }}>
							<h1>Film & Photography</h1>
						</Link>
						{/* <br></br> */}
					</div>
				</div>
			</Coverflow>
		);
	}
}
