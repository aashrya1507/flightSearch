import { combineReducers } from 'redux';
import { getpopularCitiesReducer } from './container/popularCities';


const rootReducer = combineReducers({
	popularCities: getpopularCitiesReducer,
});
 
export default rootReducer;