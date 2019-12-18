import React, { Component } from 'react';
import Home from './Home.js'

export default class App extends Component {
	state = {};

	componentDidMount() {
		fetch('/api/getUsername')
			.then((res) => res.json())
			.then((user) => this.setState({ username: user.username }));
	}

	render() {
		return (
			<div>
				<Home/>
			</div>
		);
	}
}
