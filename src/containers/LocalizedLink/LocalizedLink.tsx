import { connect } from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import * as React from 'react';
import prefixPath from '../../helpers/util';
import ILocalizedLink from './ILocalizedLink';
import {TAppRootReducer} from '../../features/index.main';
import {withRouter} from 'react-router';

class LocalizedLink extends React.Component<ILocalizedLink, {}> {
    shouldComponentUpdate() {
        return true;
    }
    render() {
        const { to, locale, className, children, isNavlink, activeClassName } = this.props;

        return (
            !isNavlink ?
            <Link
                className={className}
                to={prefixPath(to, locale)}
            >
                {children}
            </Link>
            :
             <NavLink
                 className={className}
                 activeClassName={activeClassName}
                 to={prefixPath(to, locale)}
             >
                 {children}
             </NavLink>
        );
    }
}

const mapStateToProps = (store: TAppRootReducer) => {
    return {
        locale: store.appReducer.locale
    };
};

export default withRouter(connect(mapStateToProps)(LocalizedLink));