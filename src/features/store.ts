import { applyMiddleware, createStore , compose } from 'redux';
import thunk from 'redux-thunk';
import mainRootReducer from './index.main';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createBrowserHistory from 'history/createBrowserHistory';

const reduxOptions = {
    name: 'MainPage',
    serialize: true,
};

const composeEnhancers = (
    process.env.NODE_ENV === 'development' &&
    composeWithDevTools(reduxOptions)
) || compose;

export const browserHistory = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(browserHistory);

const enhancer = composeEnhancers(
    applyMiddleware(thunk, routerMiddleware)
);
const store = createStore(mainRootReducer, enhancer);

export default store;
