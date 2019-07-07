import React from 'react';
import { Provider } from 'react-redux';
import Root from './root';
import getStore from './/store';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider
      store={getStore()}
    >
      <Root/>
    </Provider>
  );
}

export default App;
