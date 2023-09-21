import React, { useContext } from 'react'
import { ItemsContext } from './ItemsContext'



export const Item = ({ item }) => {

	const {removeItem, activeItem, setActiveItem} = useContext(ItemsContext)

	const deleteItem = (e) => {
		e.stopPropagation()
		removeItem(item?.id)
	}

	const handleActive = (item) => 		setActiveItem(item)

	return (
		<li className={`list-group-item d-flex justify-content-between align-items-center ${activeItem?.id === item?.id ? 'active-item' : ''}`} onClick={() => handleActive(item)}>
			{item?.name}
			<span className='badge badge-info badge-pill'>{item.comments.length}</span>
			<button type='button' className='btn btn-outline-danger' onClick={deleteItem}>Delete</button>
		</li>
	)
}
