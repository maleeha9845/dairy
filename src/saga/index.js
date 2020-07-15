import { all, takeLatest, takeEvery} from 'redux-saga/effects';

// saga Workers
import sideApiWorker from './side.js';
import listApiWorker from './list.js';
import loginWorker from './login.js';
import registerWorker from './register.js';
import forgotWorker from './forgot.js';
import editInfoWorker from './editInfo.js';
import addEntryWorker from './addEntry.js';
import addSectionWorker from './addSection.js';
//  action actiontypes
import {SIDE_BAR_REQUEST } from "../actiontypes/side.js";
import {LIST_API_REQUEST } from "../actiontypes/list.js";
import {LOGIN_REQUEST } from "../actiontypes/login.js";
import {FORGOT_API_REQUEST } from "../actiontypes/forgot.js";
import {REGISTER_REQUEST } from "../actiontypes/register.js";
import {EDIT_INFO_REQUEST } from "../actiontypes/editInfo.js";
import {ADD_ENTRY_REQUEST } from "../actiontypes/addEntry.js";
import {ADD_SECTION_REQUEST } from "../actiontypes/addSection.js";

export default function* rootSaga(){
  yield all([
    yield takeLatest(SIDE_BAR_REQUEST, sideApiWorker),
    yield takeLatest(LIST_API_REQUEST, listApiWorker),
    yield takeLatest(LOGIN_REQUEST, loginWorker),
    yield takeLatest(REGISTER_REQUEST, registerWorker),
    yield takeLatest(FORGOT_API_REQUEST, forgotWorker),
    yield takeLatest(EDIT_INFO_REQUEST, editInfoWorker),
    yield takeLatest(ADD_ENTRY_REQUEST, addEntryWorker),
    yield takeLatest(ADD_SECTION_REQUEST, addSectionWorker)
  ])
}
