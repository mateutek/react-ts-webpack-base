import {ReactNode} from 'react';
import {RouteComponentProps} from 'react-router';

export default interface ILocalizedLink extends RouteComponentProps {
    to: string;
    locale: string;
    className: string;
    activeClassName?: string;
    children: ReactNode;
    isNavlink: boolean;
}