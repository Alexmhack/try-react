import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { image64toCanvasRef, extractImageFileExtensionFromBase64,
	base64StringtoFile, downloadBase64File } from '../learning/ReusableUtils'

const acceptedFileTypes = 'image/png, image/x-png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => { return item.trim() })

class ReactDropzone extends Component {
	constructor (props) {
		super(props)

		this.imagePreviewCanvasRef = React.createRef()
		this.inputFileSelect = React.createRef()

		this.state = {
			maxFileSize: 1000000000000000000,
			imgSrc: null,
			imgSrcExt: null,
			crop: {
				aspect: 1/1
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
					const image = imageReader.result
					this.setState({
						imgSrc: image,
						imgSrcExt: extractImageFileExtensionFromBase64(image)
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
		this.setState({
			crop: crop
		})
	}

	handleImageLoaded = (image) => {
		// nothing here
	}

	handleImageCropComplete = (crop, pixelCrop) => {
		const canvasRef = this.imagePreviewCanvasRef.current
		const {imgSrc} = this.state

		if (pixelCrop.width && pixelCrop.height) image64toCanvasRef(canvasRef, imgSrc, pixelCrop)
	}

	handleDownloadButton = (event) => {
		event.preventDefault()
		// const canvasRef = this.imagePreviewCanvasRef.current
		const {imgSrc} = this.state
		const {imgSrcExt} = this.state
		const previewFileName = 'PreviewImage.' +  imgSrcExt

		// file to be uploaded
		// const croppedFile = base64StringtoFile(imgSrc, previewFileName)
		downloadBase64File(imgSrc, previewFileName)
	}

	handleClearToDefault = (event) => {
		event.preventDefault()
		const canvas = this.imagePreviewCanvasRef.current
		const ctx = canvas.getContext('2d')
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		this.inputFileSelect.current.value = null

		this.setState({
			maxFileSize: 1000000000000000000,
			imgSrc: null,
			imgSrcExt: null,
			crop: {
				aspect: 1/1
			}
		})
	}

	handleFileSelect = (event) => {
		const file = event.target.files
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

	render () {
		const {maxFileSize} = this.state
		const {imgSrc} = this.state
		const {crop} = this.state

		return (	
			<div>
				<h1>Drag and drop</h1>
				<input ref={this.inputFileSelect} type='file' name='file' accept={acceptedFileTypes} onChange={this.handleFileSelect}
					multiple={false}
				/>
				{imgSrc !== null ? 
					<div>
				    <ReactCrop
				      src={imgSrc}
				      crop={crop}
				      onChange={this.handleCropChange}
				      onImageLoaded={this.handleImageLoaded}
				      onComplete={this.handleImageCropComplete}
				    />

				    <br />
				    <p>Preview Canvas Crop </p>
				    <canvas ref={this.imagePreviewCanvasRef}></canvas>
				    <button onClick={this.handleDownloadButton}>Download</button>
				    <button onClick={this.handleClearToDefault}>Clear</button>
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
