import React from 'react';

import CitySelectorInput from '../CitySelectorInput';
import SelectBox from '../SelectBox';
import './citySelector.css';

export default function CitySelector() {
	return (
		<div className="container">
			<CitySelectorInput />
			<SelectBox />
		</div>
	);
} 