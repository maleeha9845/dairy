import {REGISTER_REQUEST , REGISTER_SUCCESS ,REGISTER_FAILURE} from "../actiontypes/register.js";

const initialState = {
   data: null,
   fetching: false,
   error: null,
 }

const register = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state,data: action.payload , fetching: true } ;
    case REGISTER_SUCCESS:
      return {
          ...state ,data: action.payload , fetching : false
      };
    case REGISTER_FAILURE:
      return{
        ... state , fetching: false  , error : action.error
      }
      default:
        return state;
       }
     }
export default register;
