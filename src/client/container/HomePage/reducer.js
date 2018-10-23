const defaultState = {
	popularCities: [],
};

export default function citiesReducer(state = defaultState , action) {
	switch(action.type) {
	case 'getPopularCities': 
		return state.popularCities;
	case 'fetch_popular_cities_sucess':
		return {popularCities: action.data.popularCities, ...state};
	default:
		return state;
	}
}