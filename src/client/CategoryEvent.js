import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Image, Button, Modal, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import 'fullpage.js/vendors/scrolloverflow';
import './CategoryEvent.css';
import Splash from './Splash';

const moreinfo = [
	'',
	'1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi. Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.',
	'2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi. Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.',
	'3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi. Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.'
];
const register = [
	'',
	'4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi. Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.',
	'5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi. Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.',
	'6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi. Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam dignissim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.'
];

class CategoryEvent extends React.Component {
	state = { once: true, hide: window.innerWidth <= 760, modalcontent: '', showmoreinfo: false, showregister: false };
	images = [
		'https://wallpaperplay.com/walls/full/4/3/b/138751.jpg',
		'https://www.pmec.ac.in/images/literary.jpg',
		'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&w=1000&q=80',
		'https://wallpaperaccess.com/full/124383.jpg'
	];
	componentDidMount() {
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
	}
	resize() {
		const currhide = window.innerWidth <= 760;
		this.setState({ hide: currhide });
	}
	handleMoreInfo = (ind) => {
		this.setState({ modalcontent: moreinfo[ind], showmoreinfo: !this.state.showmoreinfo });
	};
	handleRegister = (ind) => {
		if (!this.props.loggedIn) {
			this.setState({ modalcontent: <Redirect to="/login" />, showregister: !this.state.showregister });
		} else {
			this.setState({ modalcontent: register[ind], showregister: !this.state.showregister });
		}
	};
	render() {
		const contentMobile = (
			<div>
				<Modal
					show={this.state.showmoreinfo}
					onHide={() => {
						this.handleMoreInfo(0);
					}}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">More Info</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Overview</h4>
						<p>{this.state.modalcontent}</p>
					</Modal.Body>
				</Modal>
				<Modal
					show={this.state.showregister}
					onHide={() => {
						this.handleRegister(0);
					}}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Register for Event!</h4>
						<p>{this.state.modalcontent}</p>
					</Modal.Body>
				</Modal>
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
								Faucibus a pellentesque sit amet porttitor eget dolor morbi non.
							</p>
							<Row>
								<Col style={{ textAlign: 'center' }}>
									<Button
										variant="dark"
										onClick={() => {
											this.handleMoreInfo(1);
										}}
									>
										More Info
									</Button>
								</Col>
								<Col style={{ textAlign: 'center' }}>
									<Button
										variant="dark"
										onClick={() => {
											this.handleRegister(1);
										}}
									>
										Register
									</Button>
								</Col>
							</Row>
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
								Faucibus a pellentesque sit amet porttitor eget dolor morbi non.
							</p>
							<Row>
								<Col style={{ textAlign: 'center' }}>
									<Button
										variant="dark"
										onClick={() => {
											this.handleMoreInfo(2);
										}}
									>
										More Info
									</Button>
								</Col>
								<Col style={{ textAlign: 'center' }}>
									<Button
										variant="dark"
										onClick={() => {
											this.handleRegister(2);
										}}
									>
										Register
									</Button>
								</Col>
							</Row>
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
								Faucibus a pellentesque sit amet porttitor eget dolor morbi non.
							</p>
							<Row>
								<Col style={{ textAlign: 'center' }}>
									<Button
										variant="dark"
										onClick={() => {
											this.handleMoreInfo(3);
										}}
									>
										More Info
									</Button>
								</Col>
								<Col style={{ textAlign: 'center' }}>
									<Button
										variant="dark"
										onClick={() => {
											this.handleRegister(3);
										}}
									>
										Register
									</Button>
								</Col>
							</Row>
						</div>
					</div>
				</ReactFullpage.Wrapper>
			</div>
		);
		const contentPC = (
			<div>
				<Modal
					show={this.state.showmoreinfo}
					onHide={() => {
						this.handleMoreInfo(0);
					}}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">More Info</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Overview</h4>
						<p>{this.state.modalcontent}</p>
					</Modal.Body>
				</Modal>
				<Modal
					show={this.state.showregister}
					onHide={() => {
						this.handleRegister(0);
					}}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Register for Event!</h4>
						<p>{this.state.modalcontent}</p>
					</Modal.Body>
				</Modal>

				<ReactFullpage.Wrapper>
					<div>
						<div className="coverbg section">
							<div className="section content cover">
								<h1>Literary Events</h1>
							</div>
						</div>
						<div className="section">
							<div className="section content" style={{ float: 'left', width: '50%' }}>
								<h1>Read & Write</h1>
								<p id="just">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies
									mi. Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam
									dignissim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Cras
									pulvinar mattis nunc sed blandit libero volutpat sed cras. Netus et malesuada fames
									ac turpis egestas. Hendrerit gravida rutrum quisque non tellus orci ac. Porta nibh
									venenatis cras sed felis eget velit aliquet sagittis. Risus viverra adipiscing at in
									tellus integer feugiat. Euismod lacinia at quis risus sed vulputate. Magna etiam
									tempor orci eu. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. At tempor
									commodo ullamcorper a lacus vestibulum sed arcu non. Tincidunt nunc pulvinar sapien
									et. Massa tincidunt dui ut ornare lectus sit amet est placerat. Arcu ac tortor
									dignissim convallis aenean et tortor at risus. Sed elementum tempus egestas sed sed
									risus pretium quam. Tellus integer feugiat scelerisque varius morbi enim nunc
									faucibus a. Suspendisse sed nisi lacus sed. Pellentesque habitant morbi tristique
									senectus et netus et. Amet facilisis magna etiam tempor orci eu lobortis.
								</p>
								<Row>
									<Col style={{ textAlign: 'center' }}>
										<Button
											variant="dark"
											onClick={() => {
												this.handleMoreInfo(1);
											}}
										>
											More Info
										</Button>
									</Col>
									<Col style={{ textAlign: 'center' }}>
										<Button
											variant="dark"
											onClick={() => {
												this.handleRegister(1);
											}}
										>
											Register
										</Button>
									</Col>
								</Row>
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
							<div className="section content" style={{ float: 'right', width: '50%' }}>
								<h1>I/O Operations</h1>
								<p id="just">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies
									mi. Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam
									dignissim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Cras
									pulvinar mattis nunc sed blandit libero volutpat sed cras. Netus et malesuada fames
									ac turpis egestas. Hendrerit gravida rutrum quisque non tellus orci ac. Porta nibh
									venenatis cras sed felis eget velit aliquet sagittis. Risus viverra adipiscing at in
									tellus integer feugiat. Euismod lacinia at quis risus sed vulputate. Magna etiam
									tempor orci eu. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. At tempor
									commodo ullamcorper a lacus vestibulum sed arcu non. Tincidunt nunc pulvinar sapien
									et. Massa tincidunt dui ut ornare lectus sit amet est placerat. Arcu ac tortor
									dignissim convallis aenean et tortor at risus. Sed elementum tempus egestas sed sed
									risus pretium quam. Tellus integer feugiat scelerisque varius morbi enim nunc
									faucibus a. Suspendisse sed nisi lacus sed. Pellentesque habitant morbi tristique
									senectus et netus et. Amet facilisis magna etiam tempor orci eu lobortis.
								</p>
								<Row>
									<Col style={{ textAlign: 'center' }}>
										<Button
											variant="dark"
											onClick={() => {
												this.handleMoreInfo(2);
											}}
										>
											More Info
										</Button>
									</Col>
									<Col style={{ textAlign: 'center' }}>
										<Button
											variant="dark"
											onClick={() => {
												this.handleRegister(2);
											}}
										>
											Register
										</Button>
									</Col>
								</Row>
							</div>
						</div>
						<div className="section">
							<div className="section content" style={{ float: 'right', width: '50%' }}>
								<Image
									style={{ height: '100%' }}
									src="https://wallpaperplay.com/walls/full/4/3/b/138751.jpg"
								/>
							</div>
							<div className="section content" style={{ float: 'left', width: '50%' }}>
								<h1>Movie Dialogues</h1>
								<p id="just">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies
									mi. Porta non pulvinar neque laoreet. Est ullamcorper eget nulla facilisi etiam
									dignissim. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Cras
									pulvinar mattis nunc sed blandit libero volutpat sed cras. Netus et malesuada fames
									ac turpis egestas. Hendrerit gravida rutrum quisque non tellus orci ac. Porta nibh
									venenatis cras sed felis eget velit aliquet sagittis. Risus viverra adipiscing at in
									tellus integer feugiat. Euismod lacinia at quis risus sed vulputate. Magna etiam
									tempor orci eu. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. At tempor
									commodo ullamcorper a lacus vestibulum sed arcu non. Tincidunt nunc pulvinar sapien
									et. Massa tincidunt dui ut ornare lectus sit amet est placerat. Arcu ac tortor
									dignissim convallis aenean et tortor at risus. Sed elementum tempus egestas sed sed
									risus pretium quam. Tellus integer feugiat scelerisque varius morbi enim nunc
									faucibus a. Suspendisse sed nisi lacus sed. Pellentesque habitant morbi tristique
									senectus et netus et. Amet facilisis magna etiam tempor orci eu lobortis.
								</p>
								<Row>
									<Col style={{ textAlign: 'center' }}>
										<Button
											variant="dark"
											onClick={() => {
												this.handleMoreInfo(3);
											}}
										>
											More Info
										</Button>
									</Col>
									<Col style={{ textAlign: 'center' }}>
										<Button
											variant="dark"
											onClick={() => {
												this.handleRegister(3);
											}}
										>
											Register
										</Button>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				</ReactFullpage.Wrapper>
			</div>
		);
		const { once, hide } = this.state;
		return (
			<div>
				<Splash images={this.images} />
				<ReactFullpage
					scrollingSpeed={1000}
					verticalCentered={true}
					scrollOverflow={true}
					render={({ state, fullpageApi }) => {
						if (once) {
							if (fullpageApi) fullpageApi.moveSectionDown();
							this.setState({ once: false });
						}
						return <div>{hide ? contentMobile : contentPC}</div>;
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.loggedIn
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEvent);
