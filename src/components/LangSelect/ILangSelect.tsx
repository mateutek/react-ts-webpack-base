import {RouteComponentProps} from 'react-router';

export default interface ILangSelect extends RouteComponentProps<any> {
    selectedLang: string;
}
