import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/user';
import { cartReducer } from './reducers/cart';

const reducers = {
  user: userReducer,
  cart: cartReducer
};

export const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk))
);