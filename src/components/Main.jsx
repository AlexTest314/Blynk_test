import React from 'react'
import ItemsContextProvider from './ItemsContext'
import ItemsCard from './ItemsCard'
import Comments from './Comments'

const Main = () => {
  return (
	<main className='react-main container'>
	<div className='row justify-content-around'>
	<ItemsContextProvider>
	  <ItemsCard />
	  <Comments />
	  </ItemsContextProvider>
	</div>
 </main>
  )
}

export default Main