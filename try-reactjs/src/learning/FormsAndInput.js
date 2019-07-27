import React, { Component } from 'react'

function InputElement (props) {
	function handleChange (event) {
		if (props.onChange) props.onChange(event)
	}

	return (
		<div>
			<input
				ref={props.inputRef}
				name={props.name}
				type={props.type}
				value={props.value}
				placeholder={props.placeholder}
				onChange={handleChange}
			/>
		</div>
	)
}

class FormsAndInput extends Component {
	constructor (props) {
		super(props)
		this.state = {
			fullName: null
		}
		this.inputFullNameRef = React.createRef()
	}

	handleSubmit = (event) => {
		event.preventDefault()
		// const data = this.state
		// console.log(data)
		console.log(this.inputFullNameRef.current.value)
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
					<textarea required={true} ref={node => this.inputContentRef = node} placeholder='Type your content'></textarea><br />
					<InputElement name='email' type='email' placeholder='Your email' inputRef={node => this.inputElementRef = node} /><br />
					<button type='submit'>Save</button><br />
					<button onClick={this.handleFocusClick} type='submit'>Focus</button><br />
					<button onClick={this.handleClearClick} type='submit'>Clear</button><br />
				</form>
			</div>
		)
	}
}

export default FormsAndInput
