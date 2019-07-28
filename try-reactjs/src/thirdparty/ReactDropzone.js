import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

const acceptedFileTypes = 'image/png, image/x-png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => { return item.trim() })

class ReactDropzone extends Component {
	constructor (props) {
		super(props)

		this.state = {
			maxFileSize: 1000000000000000000
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
					return false
				}

				// check if accepted file types array includes the current file type
				if (!acceptedFileTypesArray.includes(currentFileType)) {
					alert('This file type is not accepted, only images are accepted')
					return false
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
				<Dropzone onDrop={this.handleOnDrop} maxSize={maxFileSize} multiple={false} accept={acceptedFileTypes}>
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
