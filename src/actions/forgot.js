import { FORGOT_API_REQUEST } from '../actiontypes/forgot.js'

const forgotApiRequest = data => ({
  type:FORGOT_API_REQUEST ,
  payload: data,
});

export default forgotApiRequest;
