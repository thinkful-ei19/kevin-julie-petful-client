import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { catReducers, dogReducers } from './reducers/index';
import protectedDataReducer from './reducers/index';

const store = createStore(
  combineReducers({
    cat: catReducers,
    dog: dogReducers,
  }),
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  ),
);

export default store;