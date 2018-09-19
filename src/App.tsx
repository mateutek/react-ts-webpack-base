import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';

import './assets/scss/App.scss';
import {NavbarContext} from './features/contexts.app';
import NAxios from './features/axios';
import Home from './pages/home';
import Navbar from './components/Navbar/Navbar';
import {TNavigationLinks} from './components/Navbar/INavbar';
import Test from './pages/TestPage';
import {browserHistory} from './features/store';

export interface AppProps {
}

type State = {
  links: TNavigationLinks;
};

export default class App extends React.Component<AppProps, State> {
    state: State = {
        links: [],
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className='app'>
                <NavbarContext.Provider value={this.state.links}>
                    <Navbar/>
                    <Switch>
                        <Route exact={true} path='/' component={Home}/>
                        <Route exact={true} path='/test' component={Test}/>
                        <Redirect to={'/'}/>
                    </Switch>
                </NavbarContext.Provider>
            </div>
        );
    }

    private fetchData() {
        NAxios.get('/navigation', (res) => {
            this.setState({links: res.data.links});
        });
    }
}
