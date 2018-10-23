import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import FlightSelection from '../FlightSelection';
import CitySelector from '../CitySelector';


export default function HomePage(props) {
	return (
		<div>
			<Header heading='Flight Search Engine' />
			<FlightSelection />
			<CitySelector popularCities={props.popularCities}/>
		</div>
	);
} 

HomePage.propTypes = {
	popularCities: PropTypes.obj,
};