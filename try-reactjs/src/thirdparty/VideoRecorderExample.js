import React, { Component } from 'react'
import VideoRecorder from 'react-video-recorder'

// only working in chrome, not on firefox
class VideoRecorderExample extends Component {
	render () {
		return (
			<div>
				<VideoRecorder />
			</div>
		)
	}
}

export default VideoRecorderExample
