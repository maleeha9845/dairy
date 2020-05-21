import { EDIT_INFO_REQUEST ,EDIT_INFO_SUCCESS , EDIT_INFO_FAILURE} from "../actiontypes/editInfo.js";

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const editInfo = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_INFO_REQUEST:
    const data ={
      name : action.payload.userName,
      }
      return {
        ...state, fetching : true , data: data
      };
   case EDIT_INFO_SUCCESS:
     return {
        ...state, fetching: false, data:action.payload
        };
    case EDIT_INFO_FAILURE:
      return {
      ...state , fetching:false ,error : action.error
      };
    default:
      return state;
    }
  }
export default editInfo;
