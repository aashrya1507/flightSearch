import {call, takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';

function* getpopularCitiesSagas() {
	yield takeLatest('fetch_popular_cities', getcities);
}

function fetchCities() {
	return axios({
		method: 'get',
		url: '/api/popularCities'
	});
}

function* getcities() {
	try {
		const response = yield call(fetchCities);

		// dispatch a success action to the store with the new dog
		yield put({ type: 'fetch_popular_cities_sucess', data: response.data });
  
	} catch (error) {
		// dispatch a failure action to the store with the error
		// yield put({ type: 'API_CALL_FAILURE', error });
	}
}

export default [getpopularCitiesSagas];