import * as React from 'react';
import { Provider, connect } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router';
import Localizer from './containers/Localizer';
import './assets/scss/App.scss';
import {TAppRootReducer} from './features/index.main';
import i18n, {ICompiledRoutes} from './services/i18n/i18n';
import defaultLocale from './config/i18n';

export interface AppProps extends RouteComponentProps {
    uiTranslationsLoaded: boolean;
    locale: string;
}

type State = {
    routesList: ICompiledRoutes;
};

class App extends React.Component<AppProps, State> {
    state: State = {
        routesList: i18n.getRoutes(),
    };

    componentDidMount() {
        this.setState({routesList: i18n.getRoutes()});
    }

    shouldComponentUpdate(nextProps: AppProps, nextState: State) {
        if (this.props.locale !== nextProps.locale) {
            this.setState({routesList: i18n.getRoutes(true, nextProps.locale)});
            return true;
        }
        if (this.props.location.pathname === nextProps.location.pathname) {
            return false;
        }
        if (this.state.routesList !== nextState.routesList) {
            return true;
        }
        return true;
    }

    render() {
        const {routesList} = this.state;
        return (
            <Localizer>
                <div className='app'>
                    <Navbar/>
                    <Switch>
                        {this.renderRouter(routesList)}
                        <Redirect to={`/${defaultLocale}`}/>
                    </Switch>
                </div>
            </Localizer>
        );
    }

    private renderRouter(routesList: ICompiledRoutes) {
        let tmp = [];
        Object.entries(routesList).forEach(([key, route]) => {
            console.log(key, route);
             tmp.push(<Route
                key={key}
                path={route.routerPath}
                exact={route.exact}
                component={route.component}
            />);
        });
        return tmp;
    }
}

const mapStateToProps = (store: TAppRootReducer) => {
    return {
        uiTranslationsLoaded: store.appReducer.uiTranslationsLoaded,
        locale: store.appReducer.locale
    };
};

export default withRouter(connect(mapStateToProps)(App));