import React, { Component } from 'react'
import MediaCapture from 'react-multimedia-capture'

class VideoCaptureExample extends Component {
	render () {
		return (
			<div>
				<h1>Video Capture Example</h1>
				<hr />

        <MediaCapturer
            constraints={{ audio: true, video: true }}
            timeSlice={10}
            onGranted={this.handleGranted}
            onDenied={this.handleDenied}
            onStart={this.handleStart}
            onStop={this.handleStop}
            onPause={this.handlePause}
            onResume={this.handleResume}
            onError={this.handleError}
            onStreamClosed={this.handleStreamClose}
            render={({ request, start, stop, pause, resume }) => 
            <div>
                <p>Granted: {granted.toString()}</p>
                <p>Rejected Reason: {rejectedReason}</p>
                <p>Recording: {recording.toString()}</p>
                <p>Paused: {paused.toString()}</p>

                {!granted && <button onClick={request}>Get Permission</button>}
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                
                <p>Streaming test</p>
                <video autoPlay></video>
            </div>
        } />
			</div>
		)
	}
}
