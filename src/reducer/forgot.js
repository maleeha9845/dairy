import {FORGOT_API_REQUEST , FORGOT_API_FAILURE, FORGOT_API_SUCCESS} from "../actiontypes/forgot.js";

const initialState = {
  data: null,
  fetching: false,
  error: null,
}

const forgot = (state = initialState, action) => {
      switch (action.type) {
    case FORGOT_API_REQUEST:
      return { ...state,data: action.payload ,fetching : true};
    case FORGOT_API_SUCCESS:
      return {
        ...state ,data: action.payload , fetching : false
      };
    case FORGOT_API_FAILURE:
      return {
        ...state , fetching:false ,error : action.error
      };
  default:
      return state;
   }
 }
export default forgot;
