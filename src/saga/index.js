import { all, takeLatest, takeEvery} from 'redux-saga/effects';

// saga Workers

import readApiWorker from './read.js';

//  action actiontypes
import {READ_API_REQUEST } from "../actiontypes/read.js";

export default function* rootSaga(){
  yield all([
    yield takeLatest(READ_API_REQUEST, readApiWorker),


  ])
}
