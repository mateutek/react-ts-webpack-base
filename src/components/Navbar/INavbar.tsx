import {RouteComponentProps} from 'react-router';

export default interface INavbar extends RouteComponentProps<any> {
}

export type TNavigationLinks  = INavigationLink[];

export interface INavigationLink {
    url: string;
    label: string;
}