import { SIDE_BAR_REQUEST ,SIDE_BAR_SUCCESS , SIDE_BAR_FAILURE} from "../actiontypes/side.js";
import  {connect} from 'react-redux';

const initialState = {
  fetching : false,
  data : null,
  error:null,
};

const side = (state = initialState, action) => {
  switch (action.type) {
    case SIDE_BAR_REQUEST:
      return {
        ...state, fetching : true , data: ''
      };
    case SIDE_BAR_SUCCESS:
      const mydetails = {
               'journal': {parent : 'journal',
                child1:action.payload[0].section[0].name ,
                child2: 'Events',
                child3:'Daily',
                child4:'Travel',
                child5:'Recipies',
                tittle : action.payload[0].section[0].entries[0].overview.tittle ,
                tittle2 : action.payload[0].section[0].entries[1].overview.tittle ,
                count: action.payload[0].section[0]['meta']['entries'],
                editorData: action.payload[0].section[0].entries[0].overview.data ,
                editorData2: action.payload[0].section[0].entries[1].overview.data ,
              }};
            return {
              ...state, fetching: false,  data: mydetails
            };
     case SIDE_BAR_FAILURE:
            return {
                  ...state ,fetching:false , error : action.error
                };
      default:
      return state;
    }
  }
export default side;
