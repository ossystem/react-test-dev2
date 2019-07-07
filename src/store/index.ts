import { Store, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer';
import '../types';

function getStore ():Store {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(thunk);
  const composer = composeEnhancers(middleware);
  const store = createStore(rootReducer, composer);
  return store;
};

export default getStore;
