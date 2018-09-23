import IRoute, {IRouteLocaleName} from '../../interfaces/IRoute';
import defaultLocale from '../../config/i18n';
import routes from '../../config/routes';
import store from '../../features/store';
import prefixPath from '../../helpers/util';

export interface ICompiledRoute extends IRoute {
    routerPath: string;
    linkPath: string;
    label: string;
}

export interface ICompiledRoutes {
    [key: string]: ICompiledRoute;
}

class I18n {
    private compiledRoutes: ICompiledRoutes;
    protected routes: IRoute[];

    constructor() {
        this.routes = routes;
        this.compiledRoutes = this.getRoutes(true, defaultLocale);
        console.log(this.compileRoutes());
    }

    static getStoreLocale (): string {
        // return 'pl';
        return store.getState().appReducer.locale;
    }

    static localizePath (routeLocale: IRouteLocaleName, locale: string = defaultLocale): string {
        return routeLocale[locale || I18n.getStoreLocale()].url;
    }

    static localizeLabel(routeLocale: IRouteLocaleName, locale: string = defaultLocale): string {
        return routeLocale[locale || I18n.getStoreLocale()].label;
    }

    parametrizeUrl (url: string, params: object): string {
        let tmp = url;
        Object.entries(params).forEach(
            ([key, value]) => {
                const matcher = new RegExp(':\\??' + key, 'g');
                tmp = tmp.replace(matcher, value);
            }
        );
        tmp = tmp.replace(new RegExp(':\\?.*'), '');
        return tmp;
    }

    getRoutes(forceCompile: boolean = false, newLocale?: string): ICompiledRoutes {
        if (forceCompile) this.compileRoutes(newLocale);
        return this.compiledRoutes;
    }

    getRoute(id: string): ICompiledRoute {
        return this.compiledRoutes[id];
    }

    compileRoutes(lang: string = defaultLocale) {
        this.compiledRoutes = this.routes.reduce((previousValue, currentValue: IRoute) => {
            previousValue[currentValue.id] = currentValue.locale ? {
                ...currentValue,
                label: I18n.localizeLabel(currentValue.locale, lang),
                routerPath: prefixPath(I18n.localizePath(currentValue.locale, lang), ':locale'),
                linkPath: I18n.localizePath(currentValue.locale, lang)
            }
            :
            {
                ...currentValue
            };
            return previousValue;
        }, {});
    }
}
const i18n = new I18n();
export default i18n;