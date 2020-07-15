import { put } from 'redux-saga/effects';
import axios from 'axios';
import {ADD_ENTRY_SUCCESS , ADD_ENTRY_FAILURE} from "../actiontypes/addEntry.js";

function addEntry(data){

  return data;
}
export default function* addEntryWorker(action){
  try{
    const response = yield addEntry(action.payload);
    yield put({ type:ADD_ENTRY_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: ADD_ENTRY_FAILURE, error });
  }
}
