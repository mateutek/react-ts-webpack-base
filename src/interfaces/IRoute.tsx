export default interface IRoute {
    id: string;
    path?: string;
    exact?: boolean;
    localize?: boolean;
    locale?: IRouteLocaleName;
    component: any;
}

export interface IRouteLocaleName {
    [key: string]: {
        url: string;
        label: string;
    };
}
