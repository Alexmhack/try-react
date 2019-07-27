import React from 'react'
// import PostSorting from './posts/PostSorting'
// import PostList from './posts/PostList'
// import ReactYoutubeExample from './thirdparty/ReactYoutubeExample'
// import ReactMarkdownExample from './thirdparty/ReactMarkdownExample'
// import Timer from './learning/Timer'
// import VideoCaptureExample from './thirdparty/VideoCaptureExample'
// import VideoRecorderExample from './thirdparty/VideoRecorderExample'
import ParentWrapper from './learning/ParentWrapper'

// <ReactYoutubeExample videoId='_nBlN9yp9R8' />
// <PostList />
// <ReactMarkdownExample />
// <Timer startCount='50'/>
function App () {
  return (
    <div className='App'>
      <header className='App-header'>
      	<ParentWrapper alertType='danger'>
      		We have got some notifications to show.
      	</ParentWrapper>
      </header>
    </div>
  )
}
 
export default App
