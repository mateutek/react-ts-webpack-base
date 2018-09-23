import {RouteComponentProps} from 'react-router';

export default interface ILocalizer extends RouteComponentProps<any> {
    locale: string;
    changeLocale: (locale: string) => void;
    setUiTranslationsLoaded: (isLoaded: boolean) => void;
    setUiTranslationsLoading: () => void;
}