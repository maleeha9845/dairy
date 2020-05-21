import { LIST_API_REQUEST ,LIST_API_SUCCESS, LIST_API_FAILURE } from "../actiontypes/list.js";

const initialState = {
  list : null,
  data : null,
fetching : false,
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case LIST_API_REQUEST:
      return { ...state, fetching : true ,data:''
         };
    case LIST_API_SUCCESS:
      return {
            ...state, fetching: false, data:action.payload
           };
    case LIST_API_FAILURE:
       return {
          ...state , fetching:false ,error : action.error
         };

    default:
      return state;
    }
  }

export default list;
