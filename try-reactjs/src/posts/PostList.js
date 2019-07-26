import React, { Component } from 'react'
import PostData from '../data/posts.json'
import PostDetail from './PostDetail'

class PostList extends Component {
	constructor (props) {
		super(props)
		this.handleDataCallback = this.handleDataCallback.bind(this)
		this.handlePostRemove = this.handlePostRemove.bind(this)
		this.state = {
			postList: []
		}
	}

	updateBackend (currentPostList) {
		this.setState({
			postList: currentPostList
		})
	}

	handlePostRemove (postItem) {
		let currentPostList = this.state.postList
		this.updateBackend(currentPostList)
		currentPostList.pop(postItem)
	}

	handleDataCallback (postItem) {
		let currentPostList = this.state.postList
		currentPostList.push(postItem)  // pushing data received on clicking title from PostDetail
		this.setState({
			postList: currentPostList // setting the whole list to new pushed list
		})
	}

	setPostStateOnProps () {
		const {post} = this.props
		this.setState({
			postItem: post
		})
	}

	componentDidUpdate (prevProps, prevState, snapShot) {
		if (this.props !== prevProps) {
			this.setPostStateOnProps()
		}
	}

	componentDidMount () {
		this.setPostStateOnProps()
	}

	render () {
		// const {postList} = this.state

	  return (
		<div >
			<h1>Posts are apppearing below.</h1>
			{this.state.postList.map((item, index) => {
				return <PostDetail
					post={item}
					key={`post-list-key ${index}`}
					didHandleRemove={this.handlePostRemove}
					dataCallback={this.handleDataCallback}	// arbitrary property handled by function
				/>
			})}
		</div>
	  )
	}
}

export default PostList
