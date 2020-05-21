import { put } from 'redux-saga/effects';
import { EDIT_INFO_SUCCESS, EDIT_INFO_FAILURE } from "../actiontypes/editInfo.js";


function editInfo(data){
  return data;
}
export default function* editInfoWorker(action){
  try{
    const response = yield editInfo(action.payload);
    yield put({ type: EDIT_INFO_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: EDIT_INFO_FAILURE, error });
  }
}
