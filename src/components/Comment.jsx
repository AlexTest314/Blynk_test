import React from 'react'

const Comment = ({comment}) => {
  return (
	<div className='react-comment'>
	<div className='card'>
		<div className='card-color' style={{ background: `${comment?.color}` }}></div>
		<div className='card-body'>
			<pre className='card-text'>{comment?.body}</pre>
		</div>
	</div>
</div>
  )
}

export default Comment