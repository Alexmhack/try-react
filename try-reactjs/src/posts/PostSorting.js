import React, { Component } from 'react'
import PostData from '../data/posts.json'
import PostDetail from './PostDetail'

class PostSorting extends Component {
	constructor (props) {
		super(props)

		// this.toggleListReverse = this.toggleListReverse.bind(this)
		// this.toggleListByDate = this.toggleListByDate.bind(this)
		this.state = {
			postList: [],
			isOldestFirst: true
		}
	}

	componentDidMount = () => {
		this.setState({
			postList: PostData,
			isOldestFirst: true
		})
	}

	toggleListReverse = (event) => {
		const {postList} = this.state
		let newPostList = postList.reverse()
		console.log(newPostList)
		this.setState({
			postList: newPostList
		})
	}

	sortByDate = (event) => {
		const {postList} = this.state
		let newPostList = postList

		if (this.state.isOldestFirst) {
			newPostList.sort((a, b) => a.date > b.date)
		} else {
			newPostList.sort((a, b) => a.date < b.date)
		}
		
		this.setState({
			postList: newPostList,
			isOldestFirst: !this.state.isOldestFirst
		})
	}

	toggleListByDate = (event) => {
		this.sortByDate()
	}

	render = (event) => {
		return (
			<div>
				<button onClick={this.toggleListReverse}>Reverse Order</button>
				<button onClick={this.toggleListByDate}>Sort By Date</button>
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
