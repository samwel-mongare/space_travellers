import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
