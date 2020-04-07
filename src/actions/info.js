import { INFO_API_REQUEST} from '../actiontypes/info.js'

const infoApiRequest = data => ({
  type:INFO_API_REQUEST ,
  payload: data,
});

export default infoApiRequest;
