import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class App extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return <Redirect to="/welcome" />;
    }

    return <div />;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
