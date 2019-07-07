import * as USER from './user';
import * as NEWS from './news';


declare global {
  interface Window { 
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; 
  }
}

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || '';

export { USER, NEWS };
