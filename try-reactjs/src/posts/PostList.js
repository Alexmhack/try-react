import React from 'react'
import PostData from '../data/posts.json'

function PostList () {
  return (
    <div >
    	<h1>Posts are apppearing below.</h1>
    	{PostData.map((postDetail, index)=>{
    		return <div>
    			<h2>{postDetail.title}</h2>
    			<p>{postDetail.content}</p>
    		</div>
    	})}
    </div>
  )
}

export default PostList
