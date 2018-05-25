import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import allReducers from './reducers/index';

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  ),
);

export default store;