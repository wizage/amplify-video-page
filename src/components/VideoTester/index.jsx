import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import VideoPlayer from '../VideoPlayer';
import 'video.js/dist/video-js.css';

class VideoTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    };
  }

  componentDidMount() {
    const { location: { search } } = this.props;
    const params = queryString.parse(search);
    if ('location' in params) {
      this.setState({
        sources: [{
          src: params.location,
          type: 'application/x-mpegURL',
        }],
      });
    }
  }

  render() {
    const { sources } = this.state;
    return (
      <div>
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
