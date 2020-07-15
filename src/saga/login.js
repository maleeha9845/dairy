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
         var result = {
           success:true,
           data : response.data,
         }
         return result;
       }).catch(function(error){
          console.log(error);
          var result = {
           success:false,
           data : error.response,
          }
         return result;
       })
       return response;
     }

export default function* loginWorker(action){
    const response = yield loginSaga(action.payload);
    if (response.success=== true){
      yield put({type: LOGIN_SUCCESS, payload: response.data });
     }
   else{
     yield put({ type: LOGIN_FAILURE, error:response.data });
    }
  }


  
