import React, { Component } from 'react'

class PostDetail extends Component {
	render () {
		const {post} = this.props

		return (
			<div >
				<h2>{post.title}</h2>
				<p>{post.content}</p>
			</div>
		)
	}
}

export default PostDetail
