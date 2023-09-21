import React, { useContext, useState } from 'react'
import { ItemsContext } from './ItemsContext'
import Comment from './Comment'

const Comments = () => {

	const {activeItem, addComment} = useContext(ItemsContext)
	const comments = activeItem?.comments

	const [comment, setComment] = useState('')
	const [color, setColor] = useState('#000000')

	const addNewComment = (e) => {
		e.preventDefault()
			 
			 addComment(activeItem.id, comment, color);
			 setComment('')
			 setColor('#000000')
		  };

	return (
		<div className='col-3'>
			<div className='react-comments'>
				<h1>Comments #{activeItem?.id}</h1>
				{comments?.length > 0 && comments?.map(comment => (<Comment comment={comment} key={comment.id}/>))}
				<form  onSubmit={addNewComment}>
					<input type='color' className='form-control' value={color} onChange={(e) => setColor(e.target.value)}/>
					<textarea className='form-control' placeholder='Type comment here...' required spellCheck={false} value={comment} onChange={(e) => setComment(e.target.value)}/>
					<button className='btn btn-primary'>Add New</button>
				</form>
			</div>
		</div>
	)
}

export default Comments