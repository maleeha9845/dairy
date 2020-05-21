import { combineReducers } from 'redux'

import side from "./side.js";
import list from "./list.js";
import login from "./login.js";
import register from "./register.js";
import forgot from "./forgot.js";
import addSection from './addSection.js';
import addEntry from './addEntry.js';
import editInfo from './editInfo.js';

const reducers = combineReducers({
  side :side, // sideBar
  list:list,
  login:login,
  register:register,
  forgot:forgot,
  addSection:addSection,
  addEntry:addEntry,
  editInfo :editInfo,
})

export default reducers;
