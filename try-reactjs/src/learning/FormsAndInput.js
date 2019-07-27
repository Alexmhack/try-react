import React, { Component } from 'react'
import InputElement from './InputElement'
import InputBlock from './InputBlock'

class FormsAndInput extends Component {
	constructor (props) {
		super(props)
		this.state = {
			fullName: null,
		}
		this.inputFullNameRef = React.createRef()
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.setState({
			[event.target.name]: event.target.value
		})
		const data = this.state
		console.log(data)
		// console.log(this.inputFullNameRef.current.value)
	}

	handleInputChange = (event) => {
		event.preventDefault()

		this.setState({
			// using square brackets we can set key value pairs, for example here 'fullName'
			[event.target.name]: event.target.value
		})
	}

	componentDidMount () {
		this.setState({
			fullName: 'Pranav'
		})

		this.inputFullNameRef.current.focus()
	}

	handleFocusClick = () => {
		this.inputFullNameRef.current.focus()
	}

	handleClearClick = () => {
		this.inputFullNameRef.current.value = ''
		this.setState({
			fullName: ''
		})
	}

	render () {
		const {fullName} = this.state
		return (
			<div>
				<h1>Forms and Input</h1>
				<p>Full Name: {fullName}</p>
				<form action='.' method='POST' onSubmit={this.handleSubmit}>
					<input ref={this.inputFullNameRef} type='text' name='fullName' onChange={this.handleInputChange} placeholder='Your Name' /><br />
					<textarea name='content' required={true} ref={node => this.inputContentRef = node} onChange={this.handleInputChange} placeholder='Type your content'></textarea><br />
					<InputElement onChange={this.handleInputChange} name='email' type='email' placeholder='Your email' inputRef={node => this.inputElementRef = node} /><br />

					<InputBlock onChange={this.handleInputChange} name='number' type='number' placeholder='Your phone number' inputRef={node => this.inputElementRef = node} /><br />

					<button type='submit'>Save</button><br />
					<button onClick={this.handleFocusClick} type='submit'>Focus</button><br />
					<button onClick={this.handleClearClick} type='submit'>Clear</button><br />
				</form>
			</div>
		)
	}
}

export default FormsAndInput
