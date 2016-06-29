import { createStore, applyMiddleware  } from 'redux';
import rootReducer from '../reducers/root-reducer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

export default function configureStore() {
    const logger = createLogger();
    const initialState = Immutable.Map();
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

    if (module.hot) {
        module.hot.accept('../reducers/root-reducer', () => {
            const nextRootReducer = require('../reducers/root-reducer');

            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}