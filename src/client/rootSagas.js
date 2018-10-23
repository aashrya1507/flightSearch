import { all, fork } from 'redux-saga/effects';

import { getpopularCitiesSagas } from './container/HomePage';

export default function* rootSagas() {
	yield all([
		...getpopularCitiesSagas,
	].map(fork));
}