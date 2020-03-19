import { combineReducers } from 'redux'

import read from "./read.js";


const reducers = combineReducers({
  read : read ,
})



export default reducers;
