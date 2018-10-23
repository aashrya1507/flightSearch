export default function citiesReducer(state = {} , action) {
	switch(action.type) {
	case 'getPopularCities': 
		return state.popularCities;
	default:
		return state;
	}
}