import {EDIT_INFO_REQUEST} from '../actiontypes/editInfo.js';

const editInfoRequest = data => ({
  type: EDIT_INFO_REQUEST,
  payload: data
});

export  default editInfoRequest;
