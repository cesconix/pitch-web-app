import React from 'react';
import { render } from 'react-dom';
import throttle from 'lodash/throttle';
import createBrowserHistory from 'history/createBrowserHistory';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState();

const store = configureStore(persistedState);
const history = createBrowserHistory();

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

render(
  <Root store={store} history={history} />,
  document.getElementById('root'),
);
