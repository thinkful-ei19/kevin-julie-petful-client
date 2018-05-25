import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { cat, dog } from './reducers/index';

const store = createStore(
  combineReducers({
    cat,
    dog,
  }),
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  ),
);

export default store;