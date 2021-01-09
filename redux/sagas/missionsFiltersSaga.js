import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_SUCCESS,
  FILTERED_MISSIONS_DATA_REQUEST,
  SHOW_ERROR,
} from "redux/actions/ActionTypes";
import { fetchMissionsData } from "redux/actions/QueryAPI";

function* getMissionsData(action) {
  try {
    const apiData = yield call(fetchMissionsData, action.payload);
    yield put({
      type: FETCH_SUCCESS,
      data: apiData,
    });
  } catch (error) {
    yield put({
      type: SHOW_ERROR,
      data: error.message,
    });
  }
}

export default function* watchMissionsFilterRequest() {
  yield takeLatest(FILTERED_MISSIONS_DATA_REQUEST, getMissionsData);
}
