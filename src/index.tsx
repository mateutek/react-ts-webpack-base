import * as React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import App from './App';
import store, {browserHistory} from './features/store';
import {ConnectedRouter} from 'react-router-redux';

const rootEl = document.getElementById('root');

render(
    <AppContainer>
        <Provider store={store}>
            <ConnectedRouter history={browserHistory}>
                <App/>
            </ConnectedRouter>
        </Provider>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;
        render(
            <AppContainer>
                <Provider store={store}>
                    <ConnectedRouter history={browserHistory}>
                        <NewApp/>
                    </ConnectedRouter>
                </Provider>
            </AppContainer>,
            rootEl
        );
    });
}
