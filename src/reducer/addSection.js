import { ADD_SECTION_REQUEST ,ADD_SECTION_SUCCESS , ADD_SECTION_FAILURE} from "../actiontypes/addSection.js";

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const addSection = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SECTION_REQUEST:
      return {
        ...state, fetching : true , data: action.payload
      };
   case ADD_SECTION_SUCCESS:
   return {
          ...state, fetching: false, data:action.payload
        };
   case ADD_SECTION_FAILURE:
      return {
        ...state , fetching:false ,error : action.error
      };
  default:
      return state;
    }
  }
export default addSection;
