import React from 'react'

function InputElement (props) {
	function handleChange (event) {
		if (props.onChange) props.onChange(event)
	}

	return (
		<div>
			<input
				ref={props.inputRef}
				name={props.name}
				type={props.type}
				value={props.value}
				placeholder={props.placeholder}
				onChange={handleChange}
			/>
		</div>
	)
}

export default InputElement
