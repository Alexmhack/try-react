import React, { Component } from 'react'

class Timer extends Component {
	constructor (props) {
		super(props)

		this.state = {
			count: 100
		}
	}

	resetCount = () => {
		const {startCount} = this.props
		clearInterval(this.myInterval)
		this.setState({
			count: startCount
		})
	}

	startCounter = () => {
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count - 1
			}))
		}, 1000)
	}

	componentDidMount () {
		const {startCount} = this.props
		this.setState({
			count: startCount
		})

		this.startCounter()
	}

	componentWillUnmount() {
		// clear the interval in case of memory leaks
		this.resetCount()
	}

	render () {
		const {count} = this.state
		return (
			<div>
				<h1>Current Count: {count}</h1>
				<button onClick={this.resetCount}>Reset</button>
				<button onClick={this.startCounter}>Start</button>
			</div>
		)
	}
}

export default Timer
