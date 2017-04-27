import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FacebookProvider, { Login } from 'react-facebook';
import { login } from '../actions';

class LoginButton extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      isWorking: true
    };

    this.onReady = this.onReady.bind(this);
    this.onWorking = this.onWorking.bind(this);
    this.onResponse = this.onResponse.bind(this);
  }

  onReady = () => {
    this.setState({ isWorking: false });
  }

  onWorking = (isWorking = false) => {
    this.setState({ isWorking });
  }

  onResponse(error, data) {
    if (error) {
      return;
    }
    console.log(data);
    this.props.login(data.tokenDetail.accessToken);
  }

  render() {
    return (
      <FacebookProvider appID="1873891659515431">
        <Login
          scope="public_profile,email,user_friends,user_birthday,user_location,user_relationship_details"
          onResponse={this.onResponse}
          onReady={this.onReady}
          onWorking={this.onWorking}
        >
          <button disabled={this.state.isWorking}>Facebook Login</button>
        </Login>
      </FacebookProvider>
    );
  }
}

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(LoginButton);
