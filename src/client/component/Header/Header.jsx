import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
	return (
		<h1>
			{props.heading}
		</h1>
	);
};

Header.propTypes = {
	heading: PropTypes.string,
};

export default Header; 