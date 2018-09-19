import IAppReducer from '../interfaces/IAppReducer';
import { GET_MAIN_INFO } from './actionTypes';

const initialState: IAppReducer = {
  testData: ''
};

let localState: IAppReducer = initialState;

function reducer(state: IAppReducer = localState, action: any): IAppReducer {

  switch (action.type) {

    case GET_MAIN_INFO:
      localState = { ...state};
      break;

    default:
      localState = { ...state };
  }

  return localState;
}

export default reducer;
