import { applyMiddleware, createStore , compose } from 'redux';
import thunk from 'redux-thunk';
import mainRootReducer from './index.main';
import { composeWithDevTools } from 'redux-devtools-extension';

const reduxOptions = {
    name: 'MainPage',
    serialize: true,
};

const composeEnhancers = (
    process.env.NODE_ENV === 'development' &&
    composeWithDevTools(reduxOptions)
) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
const store = createStore(mainRootReducer, enhancer);

export default store;
