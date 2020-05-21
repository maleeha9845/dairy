import { ADD_ENTRY_REQUEST ,ADD_ENTRY_SUCCESS , ADD_ENTRY_FAILURE} from "../actiontypes/addEntry.js";

const initialState = {
  fetching : false,
  data : null,
  error:null,
 };

const addEntry = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY_REQUEST:
      return {
        ...state, fetching : true , data: action.payload
      };
    case ADD_ENTRY_SUCCESS:
     return {
          ...state, fetching: false, data:action.payload
          };
     case ADD_ENTRY_FAILURE:
      return {
        ...state , fetching:false , error : action.error};
   default:
      return state;
    }
  }
export default addEntry;
