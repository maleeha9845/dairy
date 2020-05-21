import {ADD_ENTRY_REQUEST} from '../actiontypes/addEntry.js';

const addEntryRequest = data => ({
  type: ADD_ENTRY_REQUEST,
  payload: data
});

export  default addEntryRequest;
