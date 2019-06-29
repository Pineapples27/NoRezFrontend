import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import rootReducer from './root-reducer';

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, ReduxPromise))
);
