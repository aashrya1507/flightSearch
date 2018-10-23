import React, { Component } from 'react';

import HomePage from './component/HomePage';
import './app.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { popularStates: []};
	}

	render() {
		return (
			<div>
				<HomePage />
			</div>
		);
	}
}
