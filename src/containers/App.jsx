import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return <Redirect to="/welcome" />;
    }

    return (
      <button onClick={this.props.logout}>Logout</button>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
