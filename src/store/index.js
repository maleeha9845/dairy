import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import creatSagaMiddleware from 'redux-saga';
import reducers from '../reducer'
import rootSaga from '../saga';

const sagaMiddleware = creatSagaMiddleware();
const store = createStore(reducers, applyMiddleware(createLogger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
