import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
let myHeaders = new Headers({
	'Access-Control-Allow-Origin': '*'
});
let options = {
	method: 'GET',
	mode: 'no-cors',
	cache: 'default',
	headers: myHeaders
};
const proxyurl = 'https://images.weserv.nl/?url=';
export default class App extends Component {
	state = { loaded: false, imageCount: 0 };
	loadImage = () => {
		for (let i = 0; i < this.props.images.length; i++) {
			fetch(proxyurl+this.props.images[i], options)
				.then((res) => {
					console.log('Loaded ' + i);
					this.setState({ imageCount: this.state.imageCount + 1 });
					this.checkAll();
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	checkAll = () => {
		const { imageCount } = this.state;
		if (imageCount == this.props.images.length) {
			this.setState({ loaded: true });
			console.log('Loaded All');
		}
	};
	componentDidMount() {
		console.log(this.props);
		this.loadImage();
	}
	render() {
		if (this.state.loaded) {
                return null;
		}
		return (
			<div
				style={{
					height: '100vh',
					width: '100vw',
					backgroundColor: 'black',
					position: 'absolute',
					zIndex: '1000'
				}}
			>
				<h1 style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%)' }}>LOADING</h1>
			</div>
		);
	}
}
