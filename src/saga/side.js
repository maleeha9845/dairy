import { put } from 'redux-saga/effects';
import { SIDE_BAR_SUCCESS, SIDE_BAR_FAILURE } from "../actiontypes/side.js";


function sideApi(data){
  const Entries = [
    {user_id : 123,
    userdetails: {},
  section:[{
    name:'holidays',
    meta:{created:123 , entries : 14,},
    entries:[{
      _id : '123',
      overview:  {
        tittle:"holiday in goa",
        data:'holiday in goa ....... had good memories !!!',
        imageUrl:'jkhkh'
      },
      body:'<html>bnnnmmmm</html>',
    },
    {
      _id : '345',
      overview:  {
        tittle:"vocation in ooty",
        data:'vocation in ooty ........ wheather was nice though . but you know what ?',
        imageUrl:'jkhkh'
      },
      body:'<html>bnnnmmmm</html>',
    }]
  }],
 },
];
  return Entries
}

export default function* sideApiWorker(action){
  try{
    const response = yield sideApi();
    yield put({ type: SIDE_BAR_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: SIDE_BAR_FAILURE, error });
  }
}
