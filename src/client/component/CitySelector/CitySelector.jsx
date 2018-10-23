import React from 'react';
import PropTypes from 'prop-types';

import CitySelectorInput from '../CitySelectorInput';
import SelectBox from '../SelectBox';
import './citySelector.css';

export default function CitySelector({ popularCities }) {
	return (
		<div className="container">
			<CitySelectorInput />
			<SelectBox popularCities={popularCities}/>
		</div>
	);
} 

CitySelector.propTypes = {
	popularCities: PropTypes.obj,
};