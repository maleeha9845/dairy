import { INFO_API_REQUEST} from "../actiontypes/info.js";

const initialState = {
  list : null,
  details : null,
};

const info = (state = initialState, action) => {
  const mydetail = {
    key1: {name: 'maleeha' , age : "24"},
    key2: {name : 'masiha' , age : '21'},
    key3: {name :'zuha' , age :'19'},
  };

  const mylist = ['key1' , 'key2' ,'key3'];

  switch (action.type) {
    case INFO_API_REQUEST:
      return { ...state, list : mylist , details: mydetail}


  default:
      return state;
    }
  }
export default info;
