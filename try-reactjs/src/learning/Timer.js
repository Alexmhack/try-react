import React, { Component } from 'react'

class Timer extends Component {
	constructor (props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	componentDidMount () {
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count + 1
			}))
		}, 1000)
	}

	componentWillUnmount() {
		// clear the interval in case of memory leaks
		clearInterval(this.myInterval)
	}

	render () {
		const {count} = this.state
		return (
			<div>
				<h1>Current Count: {count}</h1>
			</div>
		)
	}
}

export default Timer
