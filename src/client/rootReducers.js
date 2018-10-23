import { combineReducers } from 'redux';
import { getpopularCitiesReducer } from './container/HomePage';


const rootReducer = combineReducers({
	popularCities: getpopularCitiesReducer,
});
 
export default rootReducer;