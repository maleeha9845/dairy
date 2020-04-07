import { SIDE_BAR_REQUEST } from '../actiontypes/side.js'

const sideBarRequest = data => ({
  type:SIDE_BAR_REQUEST ,
  payload: data,
});

export default sideBarRequest;
