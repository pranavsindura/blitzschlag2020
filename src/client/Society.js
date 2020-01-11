import React, { Component } from 'react';
import './Society.css';
// import ControlledCarousel from './EventCar.js';
import { Row, Col, Carousel } from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';
import {Link} from 'react-router-dom';

import Splash from './Splash';
export default class Society extends Component {
	state = {};
	images = ['src/shared/img/car1.jpg'];
	renderEventSoc() {
		if (window.innerWidth > 760) {
			return (
				<div className="eve-cat-cont">
					<div className="head-eve">
						<div className="event-h">EVENTS</div>
					</div>
					<div className="cat1">
						<div className="cat1-child">
							<div className="child-1-head">
								L<br></br>I<br></br>T<br></br>E<br></br>R<br></br>A<br></br>R<br></br>Y
							</div>
							<div className="main-cont-event">
								<img
									src="src/shared/img/literary.png"
									style={{ width: '16vw', heigth: 'auto' }}
									alt="logo"
								></img>
							</div>
						</div>
					</div>
					<div className="cat2">
						<div className="cat2-child">
							<div className="child-1-head">
								M<br></br>U<br></br>S<br></br>I<br></br>C<br></br> <br></br>D<br></br>A<br></br>N
								<br></br>C<br></br>E<br></br> <br></br>&<br></br>S<br></br>P<br></br>I<br></br>C
								<br></br> <br></br>M<br></br>A<br></br>C<br></br>A<br></br>Y
							</div>
							<div className="main-cont-event">
								<img
									src="src/shared/img/mds.png"
									style={{ width: '16vw', heigth: 'auto' }}
									alt="logo"
								></img>
							</div>
						</div>
					</div>
					<div className="cat3">
						<div className="cat3-child">
							<div className="child-1-head">
								E<br></br>D<br></br> <br></br>C<br></br>E<br></br>L<br></br>L
							</div>
						</div>
					</div>
					<div className="cat4">
						<div className="cat4-child">
							<div className="child-1-head">
								M<br></br>A<br></br>V<br></br>E<br></br>R<br></br>I<br></br>C<br></br>K<br></br>S
							</div>
						</div>
					</div>
					<div className="cat5">
						<div className="cat5-child">
							<div className="child-1-head">
								D<br></br>R<br></br>A<br></br>M<br></br>A<br></br>T<br></br>I<br></br>C<br></br>S
							</div>
						</div>
					</div>
					<div className="cat6">
						<div className="cat6-child">
							<div className="child-1-head">
								F<br></br>I<br></br>N<br></br>E<br></br> <br></br>A<br></br>R<br></br>T<br></br>S
							</div>
						</div>
					</div>
					<div className="cat7">
						<div className="cat7-child">
							<div className="child-1-head">
								F<br></br>I<br></br>L<br></br>M<br></br> <br></br>&<br></br> <br></br>P<br></br>H
								<br></br>O<br></br>T<br></br>O<br></br>G<br></br>R<br></br>A<br></br>P<br></br>H
								<br></br>Y
							</div>
							<div className="main-cont-event">
								<img
									src="src/shared/img/fnp.png"
									style={{ width: '16vw', heigth: 'auto' }}
									alt="logo"
								></img>
							</div>
						</div>
					</div>
					<div className="cat8">
						<div className="cat8-child">
							<div className="child-1-head">
								S<br></br>O<br></br>C<br></br>I<br></br>E<br></br>T<br></br>Y<br></br> <br></br>E
								<br></br>V<br></br>E<br></br>N<br></br>T<br></br>S
							</div>
						</div>
					</div>
					<div className="cat9">
						<div className="cat9-child">
							<div className="child-1-head">
								F<br></br>L<br></br>A<br></br>G<br></br>S<br></br>H<br></br>I<br></br>P<br></br>{' '}
								<br></br>E<br></br>V<br></br>E<br></br>N<br></br>T<br></br>S
							</div>
						</div>
					</div>
					<div className="cat10">
						<div className="cat10-child">
							<div className="child-1-head">
								V<br></br>Y<br></br>A<br></br>K<br></br>T<br></br>I<br></br>V<br></br>A<br></br>{' '}
								<br></br>S<br></br>R<br></br>I<br></br>J<br></br>A<br></br>N
							</div>
						</div>
					</div>
					<div className="cat11">
						<div className="cat11-child">
							<div className="child-1-head">
								I<br></br>N<br></br>F<br></br>O<br></br>R<br></br>M<br></br>A<br></br>L<br></br>{' '}
								<br></br>E<br></br>V<br></br>E<br></br>N<br></br>T<br></br>S
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="eve-cat-cont">
					<div className="head-eve-mob">
						<div className="event-h-mob">Events</div>
					</div>
					<div className="eve-cat-mob">
						E<br></br>
						<br></br>v<br></br>e<br></br>n<br></br>t<br></br>s<br></br>v<br></br>e<br></br>n<br></br>t
						<br></br>sv<br></br>e<br></br>n<br></br>t<br></br>s<br></br>v<br></br>e<br></br>n<br></br>t
						<br></br>s<br></br>v<br></br>e<br></br>n<br></br>t<br></br>s
					</div>
				</div>
			);
		}
	}
	render() {
		return (
			<div>
				<Splash images={this.images} />
				<Link to="/">
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
									</Link>
				<ReactFullpage
					verticalCentered={false}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section content">
									<div
										style={{
											width: '100%',
											height: '100vh',
											position: 'absolute'
										}}
									>
										{this.renderEventSoc()}
									</div>
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
			</div>
		);
	}
}
