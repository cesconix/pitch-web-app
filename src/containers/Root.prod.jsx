import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../containers/App';
import WelcomePage from '../containers/WelcomePage';
import CheckPage from '../containers/CheckPage';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={App} />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/check" component={CheckPage} />
      </div>
    </Router>
  </Provider>
);

/* eslint-disable react/forbid-prop-types */
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
