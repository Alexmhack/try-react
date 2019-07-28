import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class ReactDropzone extends Component {
	constructor (props) {
		super(props)
		
		this.state = {
			maxFileSize: 10
		}
	}

	handleOnDrop = (files, rejectedFiles) => {
		if (files && files.length > 0) {
			const currentFile = files[0]
			const currentFileSize = currentFile.size
			const currentFileType = currentFile.type
			const {maxFileSize} = this.state

			if (currentFileSize > maxFileSize) {
				alert('File is too big')
			}
		}

		if (rejectedFiles && rejectedFiles.length > 0) {
			const currentFile = rejectedFiles[0]
			const currentFileSize = currentFile.size
			const currentFileType = currentFile.type
			const {maxFileSize} = this.state

			if (currentFileSize > maxFileSize) {
				alert('File is too big')
			}
		}
	}

	render () {
		const {maxFileSize} = this.state

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
