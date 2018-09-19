import { TAppRootReducer } from './index.main';

export const getTestData =
  (state: TAppRootReducer): boolean => state.appReducer.testData;
