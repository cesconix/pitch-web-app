import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FacebookProvider, { Login } from 'react-facebook';
import { login } from '../actions';

class LoginButton extends Component {
  constructor(props) {
    super(props);

    this.onResponse = this.onResponse.bind(this);
    this.onError = this.onError.bind(this);
  }

  onResponse(data) {
    this.props.login(data.tokenDetail.accessToken);
  }

  onError(error) {
    console.log(error)
  }

  render() {
    return (
      <FacebookProvider appId="1873891659515431">
        <Login
          scope="email,user_friends,user_birthday"
          onResponse={this.onResponse}
          onError={this.onError}
          render={this.renderButton}
        />
      </FacebookProvider>
    );
  }

  renderButton({ isLoading, isWorking, onClick }) {
    return (
      <button onClick={onClick} disabled={isWorking || isLoading}>
        Login via Facebook
      </button>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginButton);
