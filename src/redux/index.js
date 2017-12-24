import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combinedReducers from './reducers';
import SagaRunner from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
export const configureStore = (state = {}) => {
  const store = createStore(
    combinedReducers,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(SagaRunner);
  return store;
}