import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer'; // combineReducers() is renamed to rootReducer

// middlewares is an array that can take in an infinite number of middleware as needed
// having this as an array makes it much easier to add more middleware in the future because it's simply an array
const middlewares = [logger];

// applyMiddleware() spreads in all the middlewares from the middlewares array
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;