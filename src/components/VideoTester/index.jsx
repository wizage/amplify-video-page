import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import VideoPlayer from '../VideoPlayer';
import 'video.js/dist/video-js.css';
import './index.css';

class VideoTester extends Component {
  constructor(props) {
    super(props);
    const { location: { search } } = props;
    const params = queryString.parse(search);
    this.state = {
      sources: [{
        src: params.location,
        type: 'application/x-mpegURL',
      }],
    };
  }

  render() {
    const { sources } = this.state;
    return (
      <div className="center">
        <h1>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} height={100} alt="Amplify Video" />
          <p className="centerText">Test Player</p>
        </h1>
        <VideoPlayer
          controls
          sources={sources}
          width={720}
          height={420}
          bigPlayButton={false}
          autoplay
        />
      </div>
    );
  }
}
export default withRouter(VideoTester);
