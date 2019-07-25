import React, { Component } from 'react'

class PostDetail extends Component {
	constructor (props) {
		super(props)
		this.titleWasClicked = this.titleWasClicked.bind(this)
		this.toggleContent = this.toggleContent.bind(this)
		this.state = { // state belongs to this component
			showContent: true,
			postItem: null
		}
	}

	toggleContent (event) {
		event.preventDefault()
		this.setState({
			showContent: !this.state.showContent	// not the current showContent state value
		})
	}

	titleWasClicked (event) {
		const {dataCallback} = this.props

		// setting postItem to a new object, only changing title 
		let newPostItem = this.props.post
		newPostItem['title'] = 'Changing the title using the button and state'

		this.setState({
			postItem: newPostItem
		})

		dataCallback(newPostItem)
	}

	// called before rendering component (predefined method)
	componentDidMount () {
		const {post} = this.props
		this.setState({
			postItem: post
		})
	}

	render () {
		// const {post} = this.props
		const {postItem} = this.state
		const {showContent} = this.state

		return (
			<div>
				{postItem !== null ? 
					<div >
						<h2 onClick={this.titleWasClicked}>{postItem.title}</h2>
						{showContent === true ? <p>{postItem.content}</p> : ""}
						<button onClick={this.toggleContent}>Toggle Content</button>
					</div>
				: ''}
			</div>
		)
	}
}

export default PostDetail
