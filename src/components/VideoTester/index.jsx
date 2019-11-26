import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import VideoPlayer from '../VideoPlayer';
import 'video.js/dist/video-js.css';
import './index.css';

class VideoTester extends Component {
  constructor(props) {
    super(props);
    const { location: { search } } = props;
    const params = queryString.parse(search);
    if (params.location === undefined || params.location === '') {
      params.location = 'https://unicornflix-dev-ow6z2qfpy.s3.amazonaws.com/output/3eb5255c-aefb-4aab-886b-28c93458cb61.m3u8';
    }
    this.state = {
      sources: [{
        src: params.location,
        type: 'application/x-mpegURL',
      }],
      url: params.location,
    };
  }

  render() {
    const { sources, url } = this.state;
    return (
      <div className="center">
        <h1>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} height={100} alt="Amplify Video" />
        </h1>
        <VideoPlayer
          controls
          sources={sources}
          width={720}
          height={420}
          bigPlayButton={false}
          autoplay
        />
        <form className="form">
          <div className="videoLabel">
            <input className="videoURL" name="location" type="text" defaultValue={url} onChange={this.onChange} />
          </div>
          <div className="buttonDiv">
            <input className="buttonSubmit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

VideoTester.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

VideoTester.defaultProps = {
  location: {
    search: '?location=',
  },
};

export default withRouter(VideoTester);
