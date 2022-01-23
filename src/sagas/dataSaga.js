import {put, takeEvery, call} from 'redux-saga/effects';

import {fetchData} from '../store/actions/dataAction';
import {DataActionTypes} from '../store/actions/dataAction';

const BASE_URL = 'http://z.bokus.ru/test.json';

const fetchDataFromApi = () => fetch(BASE_URL);

function* fetchDataWorker() {
  try {
    const data = yield call(fetchDataFromApi);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(fetchData(json));
  } catch (error) {
    console.warn(error);
  }
}

export function* dataWatcher() {
  yield takeEvery(DataActionTypes.SET_DATA, fetchDataWorker);
}
