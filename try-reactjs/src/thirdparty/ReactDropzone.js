import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const acceptedFileTypes = 'image/png, image/x-png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => { return item.trim() })

class ReactDropzone extends Component {
	constructor (props) {
		super(props)

		this.state = {
			maxFileSize: 1000000000000000000,
			imgSrc: null,
			crop: {
				aspect: 16/9
			}
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

			return true
		}
	}

	handleOnDrop = (files, rejectedFiles) => {
		if (files && files.length > 0) {
			const isVerified = this.checkFileSize(files)
			if (isVerified) {
				const imageReader = new FileReader()
				imageReader.addEventListener('load', () => {
					console.log(imageReader.result)

					this.setState({
						imgSrc: imageReader.result
					})
				}, false)

				// we can remove the for loop since we are only accepting one file => files[0] will work
				for (var i = 0; i < files.length; i++) {
					imageReader.readAsDataURL(files[i])
				}

			}
		}

		if (rejectedFiles && rejectedFiles > 0) {
			this.checkFileSize(rejectedFiles)
		}
	}

	handleCropChange = (crop) => {
		console.log(crop)
		this.setState({
			crop: crop
		})
	}

	render () {
		const {maxFileSize} = this.state
		const {imgSrc} = this.state
		const {crop} = this.state

		return (	
			<div>
				<h1>Drag and drop</h1>
				{imgSrc !== null ? 
					<div>
				    <ReactCrop
				      src={imgSrc}
				      crop={crop}
				      onChange={this.handleCropChange}
				    />
					</div> : 
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
				}
			</div>
		)
	}
}

export default ReactDropzone
