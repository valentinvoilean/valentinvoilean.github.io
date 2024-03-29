import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import App from './app';

import configureStore from './store/configureStore';

const store = configureStore();

const Root = () => (
  <GoogleReCaptchaProvider reCaptchaKey="6LcacAwdAAAAAFbzG8rZhQBeXcpK2uFcjcJTC-5v">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleReCaptchaProvider>
);

export default hot(Root);
