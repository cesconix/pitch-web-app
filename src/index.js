import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();
const history = createBrowserHistory();

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
