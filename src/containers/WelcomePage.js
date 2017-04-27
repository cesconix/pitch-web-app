import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import LoginButton from './LoginButton';

class WelcomePage extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  render() {
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return <LoginButton />;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(WelcomePage);
