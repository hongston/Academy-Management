import { all, call } from 'redux-saga/effects';

import { preAppendSection } from '@redux/sagas/sectionSaga';

export default function* SagaRunner() {
  yield all([
    call(preAppendSection)
  ]);
}