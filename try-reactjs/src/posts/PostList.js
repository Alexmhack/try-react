import React from 'react'
import PostData from '../data/posts.json'
import PostDetail from './PostDetail'

function PostList () {
  return (
	<div >
		<h1>Posts are apppearing below.</h1>
		{PostData.map((item, index) => {
			return <PostDetail post={item} key={`post-list-key ${index}`} />
		})}
	</div>
  )
}

export default PostList
