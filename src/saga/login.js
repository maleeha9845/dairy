import { put } from 'redux-saga/effects';
import axios from 'axios';

import {LOGIN_REQUEST , LOGIN_SUCCESS,LOGIN_FAILURE} from "../actiontypes/login.js";

function loginSaga(data){
  const  response = axios.post('http://localhost:4000/auth/login', {
          "email": data.email,
          "password": data.password,
       })
       .then(function (response) {
         console.log(response);
       })
       return response;
     }

export default function* loginWorker(action){
  try{
    const response = loginSaga(action.payload);
    yield put({type: LOGIN_SUCCESS, payload: response });
  }catch (error){
    yield put({ type: LOGIN_FAILURE, error:error });
 }
}
