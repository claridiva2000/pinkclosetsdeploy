import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from '../../utils/auth';

class callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/dashboard');
  }

  render() {
    return <p>Loading profile...</p>;
  }
}

export default withRouter(callback);
