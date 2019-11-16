/* eslint-env browser */
import React, { Component } from 'react';

class SplashPage extends Component {
  componentDidMount() {
    window.location.replace('https://github.com/awslabs/amplify-video');
  }

  render() {
    return (<section>Redirecting to github...</section>);
  }
}

export default SplashPage;
