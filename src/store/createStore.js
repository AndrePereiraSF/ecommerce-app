import { applyMiddleware, compose, createStore } from 'redux';

export default (reducers, middlewares) => {
  applyMiddleware(...middlewares);

  return createStore(reducers);
};