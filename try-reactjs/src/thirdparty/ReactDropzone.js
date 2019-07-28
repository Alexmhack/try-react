import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class ReactDropzone extends Component {
	constructor (props) {
		super(props)

		this.state = {
			maxFileSize: 90
		}
	}

	checkFileSize = (file) => {
		if (file && file.length > 0) {
			const {maxFileSize} = this.state

			for (var i = 0; i < file.length; i++) {
				const currentFile = file[i]
				const currentFileSize = currentFile.size
				const currentFileType = currentFile.type
				if (currentFileSize > maxFileSize) {
					alert(`File ${currentFile.name} is too big`)
				}
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
