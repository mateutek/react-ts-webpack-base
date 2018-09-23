import { TAppRootReducer } from './index.main';

export const getLocale =
  (state: TAppRootReducer): string => state.appReducer.locale;
