import {GET_MAIN_INFO} from './actionTypes';
import NAxios from './axios';

export const getTestInfo = () => {
  return (dispatch: any): any => {
    NAxios.get(`/test`, (res) => {
      dispatch({
        type: GET_MAIN_INFO,
        payload: res.data,
      });
    },
    (error, next) => {
      console.log('getTest Data Error' , { ...error });
      next();
    });
  };
};
