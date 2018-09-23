import {CHANGE_LOCALE, GET_MAIN_INFO, SET_UI_TRANSLATIONS_LOADED, SET_UI_TRANSLATIONS_LOADING} from './actionTypes';
import NAxios from './axios';


export const changeLocale = (locale) => {
    return {
        type: CHANGE_LOCALE,
        payload: locale
    };
};

export const setUiTranslationsLoading = () => ({
    type: SET_UI_TRANSLATIONS_LOADING
});

export const setUiTranslationsLoaded = isLoaded => ({
    type: SET_UI_TRANSLATIONS_LOADED,
    payload: isLoaded
});


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
