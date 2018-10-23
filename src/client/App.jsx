import React, { Component } from 'react';

import HomePageContainer from './container/HomePage';
import './app.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { popularStates: []};
	}

	
	render() {
		return (
			<div>
				<HomePageContainer />
			</div>
		);
	}
}
