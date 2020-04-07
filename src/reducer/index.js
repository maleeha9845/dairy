import { combineReducers } from 'redux'

import read from "./read.js";
import info from "./info.js";
import side from "./side.js";
import list from "./list.js";


const reducers = combineReducers({
  read : read ,
  info :info,
  side :side, // sideBar
  list:list,
})



export default reducers;
