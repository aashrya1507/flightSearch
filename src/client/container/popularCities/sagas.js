import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* getpopularCitiesSagas() {
	yield takeLatest('LOAD_TODOS', getcities);
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
		const dog = response.data.message;

		// dispatch a success action to the store with the new dog
		yield put({ type: 'API_CALL_SUCCESS', dog });
  
	} catch (error) {
		// dispatch a failure action to the store with the error
		yield put({ type: 'API_CALL_FAILURE', error });
	}
}

export default [getpopularCitiesSagas];