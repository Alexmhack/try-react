import React, { Component } from 'react'
import PostData from '../data/posts.json'
import PostDetail from './PostDetail'

class PostList extends Component {
	constructor (props) {
		super(props)
		this.handleDataCallback = this.handleDataCallback.bind(this)
	}

	handleDataCallback (msg) {
		console.log(msg)
	}

	render () {
	  return (
		<div >
			<h1>Posts are apppearing below.</h1>
			{PostData.map((item, index) => {
				return <PostDetail
					post={item}
					key={`post-list-key ${index}`}
					dataCallback={this.handleDataCallback}	// arbitrary property handled by function
				/>
			})}
		</div>
	  )
	}
}

export default PostList
