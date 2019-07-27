import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class ReactDropzone extends Component {
	handleOnDrop = (files, rejectedFiles) => {
		console.log(files)
		console.log(rejectedFiles)
	}

	render () {
		return (
			<div>
				<h1>Drag and drop</h1>
				<Dropzone onDrop={this.handleOnDrop}>
					Drag and drop your files here
				</Dropzone>
			</div>
		)
	}
}

export default ReactDropzone
