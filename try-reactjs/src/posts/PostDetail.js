import React, { Component } from 'react'

class PostDetail extends Component {
	constructor (props) {
		super(props)
		this.titleWasClicked = this.titleWasClicked.bind(this)
	}

	titleWasClicked (event) {
		console.log(this.props)
	}

	render () {
		const {post} = this.props

		return (
			<div >
				<h2 onClick={this.titleWasClicked}>{post.title}</h2>
				<p>{post.content}</p>
			</div>
		)
	}
}

export default PostDetail
