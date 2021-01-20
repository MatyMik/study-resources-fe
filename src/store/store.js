import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import rootSaga from './rootSaga';
import reducers from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(
  reducers,
  compose(middlewares),
);

sagaMiddleware.run(rootSaga);
export default store;
