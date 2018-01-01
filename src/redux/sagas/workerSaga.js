import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { workerSagaActions } from '@redux/actions/workerActions';
import * as workerModel from '@models/workerModel';

function* login(action) {
  const result = yield call(workerModel.login, action.params);
  console.log(result);
}
export function* preLogin() {
  takeEvery(workerSagaActions.USER_SIGN_IN, login);
}