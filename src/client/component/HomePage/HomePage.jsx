import React from 'react';

import Header from '../Header';
import FlightSelection from '../FlightSelection';
import CitySelector from '../CitySelector';


export default function HomePage() {
	return (
		<div>
			<Header heading='Flight Search Engine' />
			<FlightSelection />
			<CitySelector />
		</div>
	);
} 