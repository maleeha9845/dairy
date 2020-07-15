import { put , all ,} from 'redux-saga/effects';
import axios from 'axios';
import {REGISTER_REQUEST , REGISTER_SUCCESS ,REGISTER_FAILURE} from "../actiontypes/register.js";
import {LOGIN_REQUEST , LOGIN_SUCCESS,LOGIN_FAILURE} from "../actiontypes/login.js";

function registerSaga(data){
 const response = axios.post('http://localhost:4000/auth/register', {
                   "name": data.name,
                   "email": data.email,
                   "password": data.password,
                })
                  .then(function (response) {
                    return response;
                    console.log(response);
                  })
    return response;
  }

export default function* registerWorker(action){
    try{
      const response = yield registerSaga(action.payload);
      yield put({type: REGISTER_SUCCESS, payload:response });
  }catch (error){
    yield put({ type: REGISTER_FAILURE, error:error });
    }
  }
