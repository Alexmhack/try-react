import React, { Component } from 'react'

class InputBlock extends Component {
	constructor (props) {
		super(props)

		this.inputElement = null
		this.inputRef = element => {
			this.inputElement = element
		}

		this.inputFocus = () => {
			if (this.inputFocus) this.inputElement.focus()
		}
	}

	handleChange = (event) => {
		event.preventDefault()
		if (this.props.onChange) this.props.onChange(event)
	}

	componentDidMount () {
		this.inputFocus()
	}

	render () {
		return (
			<div>
				<input
					ref={this.inputRef}
					name={this.props.name}
					type={this.props.type}
					value={this.props.value}
					placeholder={this.props.placeholder}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

export default InputBlock
