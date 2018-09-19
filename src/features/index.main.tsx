import { combineReducers } from 'redux';
import appReducer from './reducer.app';
import IAppReducer from '../interfaces/IAppReducer';
import * as appSelectors from './selectors.app';

type TAppRootReducer = {
  readonly appReducer: IAppReducer;
};

const companyRootReducer = combineReducers<TAppRootReducer, any>({
  appReducer,
});

export { TAppRootReducer, appSelectors };

export default companyRootReducer;
