import { READ_API_REQUEST} from "../actiontypes/read.js";

const initialState = {
  fetch: false,
  data : null,
  errors: null,
}

const read = (state = initialState, action) => {

  switch (action.type) {
    case READ_API_REQUEST:
    console.log(action.payload);
      return { ...state, fetch: true, data: action.payload};
  default:
      return state;

  }
};


export default read;
