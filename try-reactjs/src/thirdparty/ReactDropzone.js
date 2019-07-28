import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class ReactDropzone extends Component {
	handleOnDrop = (files, rejectedFiles) => {
		console.log(files)
		console.log(rejectedFiles)
	}

	render () {
		const maxFileSize = 1000000000000000000000000

		return (
			<div>
				<h1>Drag and drop</h1>
				<Dropzone onDrop={this.handleOnDrop} maxSize={maxFileSize} multiple={false} accept='image/*'>
				  {({getRootProps, getInputProps}) => (
				    <section>
				      <div {...getRootProps()}>
				        <input {...getInputProps()} />
				        <p>Drag 'n' drop some files here, or click to select files</p>
				      </div>
				    </section>
				  )}
				</Dropzone>
			</div>
		)
	}
}

export default ReactDropzone
