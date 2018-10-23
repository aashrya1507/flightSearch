import React from 'react';


export default class CitySelectorInput extends React.Component {
	constructor (props) {
		super(props);
		this.state = { cityName: ''};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ cityName: e.target.value}); 
	}

	render () {
		const { cityName } = this.state;
		return (
			<input type='text' value={cityName} onChange={this.handleChange}/>
		);
	}
}