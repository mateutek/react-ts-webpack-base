import * as React from 'react';
import INavbar from './INavbar';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import LangSelect from '../LangSelect/LangSelect';
import defaultLocale from '../../config/i18n';
import {TAppRootReducer} from '../../features/index.main';
import {NavLink} from 'react-router-dom';
import prefixPath from '../../helpers/util';
import i18n, {ICompiledRoutes} from '../../services/i18n/i18n';

import './Navbar.scss';

type TNavbar = {
    routesList: ICompiledRoutes
};

export class Navbar extends React.Component<INavbar, TNavbar> {
    state: TNavbar = {
        routesList: i18n.getRoutes()
    };

    shouldComponentUpdate(nextProps: INavbar, nextState: TNavbar) {
        if (this.state.routesList !== nextState.routesList) {
           return true;
        }

        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.setState({routesList: i18n.getRoutes(true, nextProps.locale)});
            return true;
        }
        return false;
    }

    render() {
        const {routesList} = this.state;
        console.log(routesList);
        return (
            <ul className='links-container'>
                <li className='links-item'>
                    <NavLink
                        activeClassName='active'
                        to={prefixPath(routesList['home'].linkPath, this.props.locale)}
                        className='link'
                        exact
                    >
                        {routesList['home'].label}
                    </NavLink>
                    <NavLink
                        activeClassName='active'
                        to={prefixPath(routesList['testPage'].linkPath, this.props.locale)}
                        className='link'
                        exact
                    >
                        {routesList['testPage'].label}
                    </NavLink>
                </li>
                <LangSelect selectedLang={defaultLocale}/>
            </ul>
        );
    }
}

const mapStateToProps = (store: TAppRootReducer) => {
    return {
        locale: store.appReducer.locale
    };
};

export default withRouter(connect(mapStateToProps)(Navbar));