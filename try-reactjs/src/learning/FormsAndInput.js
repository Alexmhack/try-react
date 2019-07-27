import React, { Component } from 'react'

class FormsAndInput extends Component {
	constructor (props) {
		super(props)
		this.state({
			fullName: null
		})
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
		const {fullName} = this.state
		return (
			<div>
				<h1>Forms and Input</h1>
				<p>{fullName}</p>
				<form action='.' method='POST' onSubmit={this.handleSubmit}>
					<input type='text' name='fullName' onChange={this.handleInputChange} placeholder='Your Name'>
					<button type='submit'>Save</button>
				</form>
			</div>
		)
	}
}
