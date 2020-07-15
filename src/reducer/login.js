import {LOGIN_REQUEST , LOGIN_FAILURE, LOGIN_SUCCESS} from "../actiontypes/login.js";

const initialState = {
  data: null,
  fetching: false,
  error: null,
}

const login = (state = initialState, action) => {
      switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, data: action.payload ,fetching:true };
    case LOGIN_SUCCESS:
      return {
        ...state , data: action.payload , fetching : false
      };
    case LOGIN_FAILURE:
      return{
        ... state , error : action.error.data
      };
      default:
      return state;
    }
  }
export default login;
