import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import App from './app';

import configureStore from './store/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(Root);
