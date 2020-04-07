import { SIDE_BAR_REQUEST } from "../actiontypes/side.js";

const initialState = {
  list : null,
  details : null,
  key:null,
};

const side = (state = initialState, action) => {
  const mydetail = {
    'journal': {parent : 'journal',
              child1:'Holiday' ,
              child2: 'Events',
              child3:'Daily',
              child4:'Travel',
              child5:'Recipies',

            },
      'settings': {parent : 'settings',
      child1:'login' ,
      child2: 'logout',
      child3: 'signup'},
    }


  const mylist = ['1' , '2' ];

  switch (action.type) {
    case SIDE_BAR_REQUEST:
      return { ...state, list : mylist , details: mydetail};


  default:
      return state;
    }
  }
export default side;
