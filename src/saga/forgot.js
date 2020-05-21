import { put } from 'redux-saga/effects';


import {FORGOT_API_REQUEST , FORGOT_API_SUCCESS,FORGOT_API_FAILURE} from "../actiontypes/forgot.js";

function forgotSaga(data){
  return data;
 }

export default function* forgotWorker(action){
  try{
    const response = forgotSaga(action.payload);
    yield put({type: FORGOT_API_SUCCESS, payload: response }) ;
  }catch (error){
    yield put({ type: FORGOT_API_FAILURE, error });
   }
 }
