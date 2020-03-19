import { put } from 'redux-saga/effects';
import { READ_API_SUCCESS, READ_API_FAILURE} from "../actiontypes/read.js";

function readApi(data){
  console.log(data);

}

export default function* readApiWorker(action){

    const response = yield readApi(action.payload);
}
