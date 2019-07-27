import React, { Component } from 'react'

class ParentWrapper extends Component {
	render () {
		const {alertType} = this.props
		return (
			<div className={'alert alert-' + alertType}>{this.props.children}</div>
		)
	}
}

function AlertBox (props) {
	return <div className={'alert alert-' + props.alertType}>{props.children}</div>
}

export default AlertBox
