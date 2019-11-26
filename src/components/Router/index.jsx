import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import VideoTester from '../VideoTester';

const Routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route sensitive={false} path="/Player" component={VideoTester} />
    </div>
  </Router>
);

export default Routing;
