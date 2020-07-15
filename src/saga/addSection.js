import { put } from 'redux-saga/effects';
import axios from 'axios';
import {ADD_SECTION_SUCCESS , ADD_SECTION_FAILURE} from "../actiontypes/addSection.js";

function addSection(data ){
  console.log(data);

//   const response = axios.post('http://localhost:4000/sample/1', {name : 'ff',
// age:'12'})
//                    .then(function (response) {
//                      console.log(response);
//                      return response;
//                    }).catch(function(response){
//                       console.log(response);
// return response;
//                    })
//     return response;

//   var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRlZWI0YWVkNDU0MjE3ODgyM2NjYTMiLCJpYXQiOjE1OTE2Njc1MzB9.pCpcsglpF8OVBvZmoVidzbsCDLrhnSxLAyXZqikTRXc";
//   const config = {
//                   headers: { Authorization: `Bearer ${token}` }
//                 };
//   const bodydata = {
//
// entries: [],
// meta: {created: "10-11-2019", entries: 3},
// name: data
//
//                   };
//    const response = axios.post('http://localhost:4000/channels/create-section',
//                     bodydata,config
//                   )
//                   .then(function (response) {
//                       console.log(response);
//                       return response;
//                    })
  //  return response;

    const bodydata = {
                      name: data
                    };
    const response = axios.post('http://localhost:4000/sample/1',
                        bodydata
                      )
                      .then(function (response) {
                          console.log('hello');
                          return response;
                       })
                       return response;
                     }

export default function* addSectionWorker(action){

  try{
    const response = yield addSection(action.payload );
    yield put({ type:ADD_SECTION_SUCCESS, payload : response})
  }catch (error){
    yield put({ type: ADD_SECTION_FAILURE, error:error });
  }
}
