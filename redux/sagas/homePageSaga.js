import { call, put, takeLatest } from "redux-saga/effects";
import {
  MISSIONS_DATA_REQUEST,
  SET_MISSIONS_DATA,
  SHOW_ERROR,
} from "redux/actions/ActionTypes";
import { fetchMissionsData } from "redux/actions/QueryAPI";

function* getMissionsData() {
  try {
    const apiData = yield call(fetchMissionsData);
    yield put({
      type: SET_MISSIONS_DATA,
      payload: apiData,
    });
  } catch (error) {
    yield put({
      type: SHOW_ERROR,
      data: error.message,
    });
  }
}

export default function* watchHomePageRequest() {
  yield takeLatest(MISSIONS_DATA_REQUEST, getMissionsData);
}
