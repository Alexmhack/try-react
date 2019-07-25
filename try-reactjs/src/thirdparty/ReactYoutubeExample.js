import React, { Component } from 'react'
import YouTube from 'react-youtube'

class ReactYoutubeExample extends Component {
  onVideoReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    console.log(event.target)
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const {videoId} = this.props
 
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.onVideoReady}
      />
    );
  }
}

export default ReactYoutubeExample
