import {REGISTER_REQUEST} from '../actiontypes/register.js';

const registerRequest = data => ({
  type: REGISTER_REQUEST,
  payload: data
});

export  default registerRequest;
