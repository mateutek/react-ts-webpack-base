import * as React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');

render(
    <AppContainer>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
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
                <BrowserRouter>
                    <NewApp/>
                </BrowserRouter>
            </AppContainer>,
            rootEl
        );
    });
}
