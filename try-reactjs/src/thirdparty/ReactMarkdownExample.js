import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class ReactMarkdownExample extends Component {
	render () {
		const input = '# [This](//google.com)\n\n is a heading\n\nthis i a pragraoh'
		// escapeHtml={false} will render html in markdown
		const disallowed = ['link']
		return (
			<div className='App'>
				<ReactMarkdown source={input} disallowedTypes={disallowed} />
			</div>
		)
	}
}

export default ReactMarkdownExample
