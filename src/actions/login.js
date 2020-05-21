import {LOGIN_REQUEST} from '../actiontypes/login.js';

const loginRequest = data => ({
  type: LOGIN_REQUEST,
  payload: data
});

export  default loginRequest;
