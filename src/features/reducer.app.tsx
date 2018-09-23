import IAppReducer from '../interfaces/IAppReducer';
import {CHANGE_LOCALE, GET_MAIN_INFO, SET_UI_TRANSLATIONS_LOADED, SET_UI_TRANSLATIONS_LOADING} from './actionTypes';
import defaultLocale from '../config/i18n';

const initialState: IAppReducer = {
    locale: defaultLocale,
    uiTranslationsLoaded: false
};

let localState: IAppReducer = initialState;

function reducer(state: IAppReducer = localState, action: any): IAppReducer {

    switch (action.type) {
        case CHANGE_LOCALE:
            localState = {...state, locale: action.payload };
            break;
        case SET_UI_TRANSLATIONS_LOADING:
            localState = {...state, uiTranslationsLoaded: false};
            break;

        case SET_UI_TRANSLATIONS_LOADED:
            localState = {...state, uiTranslationsLoaded: action.payload};
            break;
        case GET_MAIN_INFO:
            localState = { ...state};
            break;

        default:
            localState = { ...state };
    }

    return localState;
}

export default reducer;
