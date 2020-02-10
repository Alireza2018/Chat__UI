import { takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";

// export function* challengeSaga() {
//     yield all([
//       takeLatest(types.FETCH_MANY_CHALLENGES_START, fetchManyChallengesSaga)
//     ]);
// }