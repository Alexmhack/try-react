import React, { Component } from 'react'

class Timer extends Component {
	constructor (props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	componentDidMount () {
		const myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: this.state.count + 1
			}))
		}, 1000)
	}

	render () {
		const {count} = this.state
		return (
			<div>Current Count: {count}</div>
		)
	}
}

export default Timer
