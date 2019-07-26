import React, { Component } from 'react'
import PostData from '../data/posts.json'

class PostSorting extends Component {
	constructor (props) {
		super(props)

		this.toggleListReverse = this.toggleListReverse.bind(this)
		this.state = {
			postList: []
		}
	}

	componentDidMount () {
		this.setState({
			postList: PostData
		})
	}

	toggleListReverse (event) {
		const {postList} = this.state
		let newPostList = postList.reverse()
		console.log(newPostList)
		this.setState({
			postList: newPostList
		})
	}

	render () {
		return (
			<div>
				<button onClick={this.toggleListReverse}>Reverse Order</button>
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

export default PostSorting
