import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';

import './index.scss';
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import App from './app/App.view';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

ReactDOM.render(
  <ParallaxProvider>
    <Provider store={store}>
        <App />
    </Provider>
  </ParallaxProvider>,
    document.getElementById('root'));

serviceWorker.register();
