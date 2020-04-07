import { LIST_API_REQUEST } from '../actiontypes/list.js'

const listApiRequest = data => ({
  type:LIST_API_REQUEST ,
  payload: data,
});

export default listApiRequest;
