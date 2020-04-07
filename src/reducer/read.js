import { READ_API_REQUEST} from "../actiontypes/read.js";

const initialState = {
  list : null,
  data : null,
  details: null,
}

const read = (state = initialState, action) => {
  const mydetail = {
    day1: {date: '04' , month : "11"},
    day2: {date: '17' , month : "03"},
    day3: {date: '12' , month : "12"},
  };

  const mylist = ['day1' , 'day2' ,'day3'];


  switch (action.type) {
    case READ_API_REQUEST:
    console.log(action.payload)
      return { ...state, list : mylist , details: mydetail, data: action.payload};
  default:
      return state;

  }
};


export default read;
