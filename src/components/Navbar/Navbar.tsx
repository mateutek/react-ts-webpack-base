import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {NavbarContext} from '../../features/contexts.app';
import INavbar from './INavbar';
import './Navbar.scss';
import {withRouter} from 'react-router';

type TNavbar = {};

export class Navbar extends React.Component<INavbar, TNavbar> {
    state: TNavbar = {};

    shouldComponentUpdate(nextProps: INavbar, nextState: TNavbar) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <ul className='links-container'>
                <NavbarContext.Consumer>
                    {links => {
                        return links.length > 0 ? links.map((link, index) => (
                            <li key={index} className='links-item'>
                                <NavLink exact to={link.url} className='link' activeClassName='active'>
                                    {link.lable}
                                </NavLink>
                            </li>
                            )) : null;
                        }
                    }
                </NavbarContext.Consumer>
            </ul>
        );
    }
}


export default withRouter(Navbar);