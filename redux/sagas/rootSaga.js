import { all } from "redux-saga/effects";
import watchHomePageRequest from "./homePageSaga";
import watchMissionsFilterRequest from "./missionsFiltersSaga";

export default function* rootSaga() {
  yield all([watchHomePageRequest(), watchMissionsFilterRequest()]);
}
