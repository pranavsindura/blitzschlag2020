import React, { Component } from 'react';
import './main.css';
import ReactFullpage from '@fullpage/react-fullpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default class Home extends Component {
	state = { moveto: null};
	componentDidMount()
	{
		this.setState({ moveto: this.props.moveto});
	}
	componentDidUpdate(prevProps)
	{
		if(prevProps.moveto != this.props.moveto)
		{
			this.setState({ moveto: this.props.moveto});
		}
	}
	render() { 
		return (
			<div>
				<ReactFullpage
					//fullpage options
					scrollingSpeed={1000}
					controlArrows={true}
					verticalCentered={true}
					anchors={['home', 'aboutus', 'highlight', 'contactus']}
					render={({ state, fullpageApi }) => {
						if (this.state.moveto) {
							fullpageApi.moveTo(this.state.moveto);
						}
						return (
							<ReactFullpage.Wrapper>
								<div className="section content">
									<h1>Blitzschlag 2020</h1>
								</div>
								<div className="section content">
									<h1>About Us</h1>
								</div>
								<div className="section content">
									<div className="slide content">
										<h1>Highlight 1</h1>
									</div>
									<div className="slide content">
										<h1>Highlight 2</h1>
									</div>
									<div className="slide content">
										<h1>Highlight 3</h1>
									</div>
									<div className="slide content">
										<h1>Highlight 4</h1>
									</div>
									<div className="slide content">
										<h1>Highlight 5</h1>
									</div>
								</div>
								<div className="section content">
									<h1>Contact Us</h1>
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
			</div>
		);
	}
}
