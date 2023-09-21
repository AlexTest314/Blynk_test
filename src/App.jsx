import './App.css'
import Comments from './components/Comments'
import ItemsCard from './components/ItemsCard'
import ItemsContextProvider from './components/ItemsContext'
import Main from './components/Main'

function App() {

  return (
    <>
    
      <div className='react-app container-fluid'>
        <div className='row'>
          <div className='col-1 col-1-1'>
            <aside className='react-aside'>
              <h2>DAYRY APP</h2>
              <div>Comment whit no sense</div>
            </aside>
          </div>
          <div className='col-2 col-2-1'>
            <Main/>
          </div>
        </div >
      </div >
      
    </>
  )
}

export default App



