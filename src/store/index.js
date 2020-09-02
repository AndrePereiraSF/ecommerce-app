import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/user';

const reducers = {
  user: userReducer
};

export const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk))
);