import React, { Component } from 'react'

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

	render () {
		const {fullName} = this.state
		return (
			<div>
				<h1>Forms and Input</h1>
				<p>Full Name: {fullName}</p>
				<form action='.' method='POST' onSubmit={this.handleSubmit}>
					<input ref={this.inputFullNameRef} type='text' name='fullName' onChange={this.handleInputChange} placeholder='Your Name'></input>
					<button type='submit'>Save</button>
					<button onClick={this.handleFocusClick} type='submit'>Focus</button>
				</form>
			</div>
		)
	}
}

export default FormsAndInput
