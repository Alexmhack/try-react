import React, { Component } from 'react'

class FormsAndInput extends Component {
	constructor (props) {
		super(props)
	}

	handleSubmit = (event) => {
		console.log(event)
		event.preventDefault()
	}

	handleInputChange = (event) => {
		console.log(event)
		event.preventDefault()
	}

	render () {
		return (
			<div>
				<h1>Forms and Input</h1>
				<form action='.' method='POST' onSubmit={this.handleSubmit}>
					<input type='text' name='name' onChange={this.handleInputChange} placeholder='Your Name'>
					<button type='submit'>Save</button>
				</form>
			</div>
		)
	}
}
