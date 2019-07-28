import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class ReactDropzone extends Component {
	constructor (props) {
		super(props)

		this.state = {
			maxFileSize: 100000000000000000000
		}
	}

	checkFileSize = (file) => {
		if (file && file.length > 0) {
			const currentFile = file[0]
			const currentFileSize = currentFile.size
			const currentFileType = currentFile.type

			const {maxFileSize} = this.state

			if (currentFileSize > maxFileSize) {
				alert('File is too big')
			}
		}
	}

	handleOnDrop = (files, rejectedFiles) => {
		this.checkFileSize(files)
		this.checkFileSize(rejectedFiles)
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
