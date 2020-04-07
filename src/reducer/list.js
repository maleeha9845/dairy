import { LIST_API_REQUEST} from "../actiontypes/list.js";

const initialState = {
  list : null,
  details : null,

};

const list = (state = initialState, action) => {
  const mydetail = {
    'holidays': {parent : 'Holidays',
          child1: 'mysore',
          child2 :'bangalore',
          child3: 'goa',
        },
    'events': {parent : 'Events' ,
          child1: 'dasara',
          child2 :'new year',
          child3: 'holi',
              },
      'daily': {parent : 'Daily' ,
                child1: 'today',
                child2 :'tomorrow',
                child3: 'day after',
                        },
      'travel': {parent : 'Travel' ,
                 child1: 'london',
                 child2 :'paris',
                 child3: 'spain',
                                  },
      'recipies': {parent : 'Recipies' ,
                   child1: 'daal',
                   child2 :'chicken fry',
                   child3: 'butter chicken',
                                            },
                                         };
   switch (action.type) {
    case LIST_API_REQUEST:
      return { ...state, details: mydetail
         };

    default:
      return state;
    }
  }

export default list;
