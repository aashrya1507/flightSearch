import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomePageComponent from '../../component/HomePage';
import { fetchPopularCities } from './actions';

class HomePage extends React.Component {
	componentDidMount() {
		this.props.fetchPopularCities();
	}
	render() {
		const { popularCities } = this.props; 
		return (
			<div>
				<HomePageComponent popularCities={popularCities}/>
			</div>
		);
	}
  
}

HomePage.propTypes = {
	fetchPopularCities: PropTypes.func,
	popularCities: PropTypes.obj,
};

function mapDispatchToProps(disaptch) {
	return bindActionCreators({fetchPopularCities}, disaptch);
}

function mapStateToProps(state) {
	return { popularCities: state.popularCities };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);