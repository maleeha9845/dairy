import { put } from 'redux-saga/effects';
import { LIST_API_SUCCESS, LIST_API_FAILURE } from "../actiontypes/list.js";


function listApi(data){
  return(data);
}

export default function* listApiWorker(action){
  try{
    //should delete later... hard code!
    const mydetail = {
    'holidays': {parent : 'Holidays',
              child1: 'Holiday in Goa !',
              child2 :'A trip to Ooty',
              child3: 'Varuna lake!',
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
    const response = yield listApi(mydetail);
    yield put({ type: LIST_API_SUCCESS, payload: response });
  }catch (error){
    yield put({ type: LIST_API_FAILURE, error });
  }
}
