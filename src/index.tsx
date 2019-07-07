import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setCredentials } from './utils';

setCredentials();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
