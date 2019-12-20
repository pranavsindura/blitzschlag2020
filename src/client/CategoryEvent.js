import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Image } from 'react-bootstrap';
import './CategoryEvent.css';
export default class CategoryEvent extends React.Component {
	state = { once: true, hide: window.innerWidth <= 760 };
	componentDidMount() {
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
	}
	resize() {
		const currhide = window.innerWidth <= 760;
		this.setState({ hide: currhide });
	}
	componentDidUpdate() {
		console.log(this.state);
	}
	render() {
		const contentMobile = (
			<div>
				<ReactFullpage.Wrapper>
					<div className="coverbg section">
						<div className="section content cover">
							<h1>Literary Events</h1>
						</div>
					</div>
					<div
						className="section"
						style={{
							backgroundImage: 'url(https://www.pmec.ac.in/images/literary.jpg)',
							backgroundSize: 'cover'
						}}
					>
						<div className="contentoverlay">
							<h1>Read & Write</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi.
								Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim.
								Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Cras pulvinar mattis
								nunc sed blandit libero volutpat sed cras. Netus et malesuada fames ac turpis egestas.
								Hendrerit gravida rutrum quisque non tellus orci ac. Porta nibh venenatis cras sed felis
								eget velit aliquet sagittis. Risus viverra adipiscing at in tellus integer feugiat.
								Euismod lacinia at quis risus sed vulputate. Magna etiam tempor orci eu. Lorem dolor sed
								viverra ipsum nunc aliquet bibendum enim. At tempor commodo ullamcorper a lacus
								vestibulum sed arcu non. Tincidunt nunc pulvinar sapien et. Massa tincidunt dui ut
								ornare lectus sit amet est placerat. Arcu ac tortor dignissim convallis aenean et tortor
								at risus. Sed elementum tempus egestas sed sed risus pretium quam. Tellus integer
								feugiat scelerisque varius morbi enim nunc faucibus a. Suspendisse sed nisi lacus sed.
								Pellentesque habitant morbi tristique senectus et netus et. Amet facilisis magna etiam
								tempor orci eu lobortis.
							</p>
						</div>
					</div>

					<div
						className="section"
						style={{
							backgroundImage:
								'url(https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&w=1000&q=80)'
						}}
					>
						<div className="contentoverlay">
							<h1>I/O Operations</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi.
								Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim.
								Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Cras pulvinar mattis
								nunc sed blandit libero volutpat sed cras. Netus et malesuada fames ac turpis egestas.
								Hendrerit gravida rutrum quisque non tellus orci ac. Porta nibh venenatis cras sed felis
								eget velit aliquet sagittis. Risus viverra adipiscing at in tellus integer feugiat.
								Euismod lacinia at quis risus sed vulputate. Magna etiam tempor orci eu. Lorem dolor sed
								viverra ipsum nunc aliquet bibendum enim. At tempor commodo ullamcorper a lacus
								vestibulum sed arcu non. Tincidunt nunc pulvinar sapien et. Massa tincidunt dui ut
								ornare lectus sit amet est placerat. Arcu ac tortor dignissim convallis aenean et tortor
								at risus. Sed elementum tempus egestas sed sed risus pretium quam. Tellus integer
								feugiat scelerisque varius morbi enim nunc faucibus a. Suspendisse sed nisi lacus sed.
								Pellentesque habitant morbi tristique senectus et netus et. Amet facilisis magna etiam
								tempor orci eu lobortis.
							</p>
						</div>
					</div>
                    <div
						className="section"
						style={{
							backgroundImage: 'url(https://wallpaperplay.com/walls/full/4/3/b/138751.jpg)',
							backgroundSize: 'cover'
						}}
					>
						<div className="contentoverlay">
							<h1>Movie Dialogues</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi.
								Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim.
								Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Cras pulvinar mattis
								nunc sed blandit libero volutpat sed cras. Netus et malesuada fames ac turpis egestas.
								Hendrerit gravida rutrum quisque non tellus orci ac. Porta nibh venenatis cras sed felis
								eget velit aliquet sagittis. Risus viverra adipiscing at in tellus integer feugiat.
								Euismod lacinia at quis risus sed vulputate. Magna etiam tempor orci eu. Lorem dolor sed
								viverra ipsum nunc aliquet bibendum enim. At tempor commodo ullamcorper a lacus
								vestibulum sed arcu non. Tincidunt nunc pulvinar sapien et. Massa tincidunt dui ut
								ornare lectus sit amet est placerat. Arcu ac tortor dignissim convallis aenean et tortor
								at risus. Sed elementum tempus egestas sed sed risus pretium quam. Tellus integer
								feugiat scelerisque varius morbi enim nunc faucibus a. Suspendisse sed nisi lacus sed.
								Pellentesque habitant morbi tristique senectus et netus et. Amet facilisis magna etiam
								tempor orci eu lobortis.
							</p>
						</div>
					</div>
				</ReactFullpage.Wrapper>
			</div>
		);
		const contentPC = (
			<ReactFullpage.Wrapper>
				<div>
					<div className="coverbg section">
						<div className="section content cover">
							<h1>Literary Events</h1>
						</div>
					</div>
					<div className="section">
						<div
							className="section content"
							style={{ float: 'left', width: '50%' }}
						>
							<h1>Read & Write</h1>
							<p id="just">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi.
								Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim.
								Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Cras pulvinar mattis
								nunc sed blandit libero volutpat sed cras. Netus et malesuada fames ac turpis egestas.
								Hendrerit gravida rutrum quisque non tellus orci ac. Porta nibh venenatis cras sed felis
								eget velit aliquet sagittis. Risus viverra adipiscing at in tellus integer feugiat.
								Euismod lacinia at quis risus sed vulputate. Magna etiam tempor orci eu. Lorem dolor sed
								viverra ipsum nunc aliquet bibendum enim. At tempor commodo ullamcorper a lacus
								vestibulum sed arcu non. Tincidunt nunc pulvinar sapien et. Massa tincidunt dui ut
								ornare lectus sit amet est placerat. Arcu ac tortor dignissim convallis aenean et tortor
								at risus. Sed elementum tempus egestas sed sed risus pretium quam. Tellus integer
								feugiat scelerisque varius morbi enim nunc faucibus a. Suspendisse sed nisi lacus sed.
								Pellentesque habitant morbi tristique senectus et netus et. Amet facilisis magna etiam
								tempor orci eu lobortis.
							</p>
						</div>
						<div className="section content" style={{ float: 'right', width: '50%' }}>
							<Image style={{ height: '100%' }} src="https://www.pmec.ac.in/images/literary.jpg" />
						</div>
					</div>
					<div className="section">
						<div className="section content" style={{ float: 'left', width: '50%' }}>
							<Image
								style={{ height: '100%' }}
								src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&w=1000&q=80"
							/>
						</div>
						<div
							className="section content"
							style={{ float: 'right', width: '50%' }}
						>
							<h1>I/O Operations</h1>
							<p id="just">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi.
								Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim.
								Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Cras pulvinar mattis
								nunc sed blandit libero volutpat sed cras. Netus et malesuada fames ac turpis egestas.
								Hendrerit gravida rutrum quisque non tellus orci ac. Porta nibh venenatis cras sed felis
								eget velit aliquet sagittis. Risus viverra adipiscing at in tellus integer feugiat.
								Euismod lacinia at quis risus sed vulputate. Magna etiam tempor orci eu. Lorem dolor sed
								viverra ipsum nunc aliquet bibendum enim. At tempor commodo ullamcorper a lacus
								vestibulum sed arcu non. Tincidunt nunc pulvinar sapien et. Massa tincidunt dui ut
								ornare lectus sit amet est placerat. Arcu ac tortor dignissim convallis aenean et tortor
								at risus. Sed elementum tempus egestas sed sed risus pretium quam. Tellus integer
								feugiat scelerisque varius morbi enim nunc faucibus a. Suspendisse sed nisi lacus sed.
								Pellentesque habitant morbi tristique senectus et netus et. Amet facilisis magna etiam
								tempor orci eu lobortis.
							</p>
						</div>
					</div>
                    <div className="section">
						<div className="section content" style={{ float: 'right', width: '50%' }}>
							<Image
								style={{ height: '100%' }}
								src="https://wallpaperplay.com/walls/full/4/3/b/138751.jpg"
							/>
						</div>
						<div
							className="section content"
							style={{ float: 'left', width: '50%' }}
						>
							<h1>Movie Dialogues</h1>
							<p id="just">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi.
								Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim.
								Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Cras pulvinar mattis
								nunc sed blandit libero volutpat sed cras. Netus et malesuada fames ac turpis egestas.
								Hendrerit gravida rutrum quisque non tellus orci ac. Porta nibh venenatis cras sed felis
								eget velit aliquet sagittis. Risus viverra adipiscing at in tellus integer feugiat.
								Euismod lacinia at quis risus sed vulputate. Magna etiam tempor orci eu. Lorem dolor sed
								viverra ipsum nunc aliquet bibendum enim. At tempor commodo ullamcorper a lacus
								vestibulum sed arcu non. Tincidunt nunc pulvinar sapien et. Massa tincidunt dui ut
								ornare lectus sit amet est placerat. Arcu ac tortor dignissim convallis aenean et tortor
								at risus. Sed elementum tempus egestas sed sed risus pretium quam. Tellus integer
								feugiat scelerisque varius morbi enim nunc faucibus a. Suspendisse sed nisi lacus sed.
								Pellentesque habitant morbi tristique senectus et netus et. Amet facilisis magna etiam
								tempor orci eu lobortis.
							</p>
						</div>
					</div>
				</div>
			</ReactFullpage.Wrapper>
		);
		const { once, hide } = this.state;
		return (
			<div>
				<ReactFullpage
					scrollingSpeed={1000}
					verticalCentered={true}
					scrollOverflow={true}
					touchSensitivity={30}
					render={({ state, fullpageApi }) => {
						if (once)
							setTimeout(() => {
								fullpageApi.moveSectionDown();
								this.setState({ once: false });
							}, 1500);
						return <div>{hide ? contentMobile : contentPC}</div>;
					}}
				/>
			</div>
		);
	}
}
