import React from 'react';
import './selectBox.css';

export default class SelectBox extends React.Component {

	render () {
		console.log(this.props.popularCities);
		return (
			<div className='selectBoxContainer'>
				<h3>TOP CITIES</h3>
				<ul>
					<li> New Delhi</li>
					<li> New Delhi</li>
					<li> New Delhi</li>
					<li> New Delhi</li>
				</ul>
			</div>
		);
	}
}