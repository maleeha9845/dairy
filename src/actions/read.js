import { READ_API_REQUEST} from '../actiontypes/read.js'

const readApiRequest = data => ({
  type:READ_API_REQUEST ,
  payload: data,
});

export default readApiRequest;
