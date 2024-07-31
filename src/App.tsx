import './App.css'
import Listing from './components/Listing/Listing'
import { dataArray } from './data/data'
import './main.css'


function App() {

  return (
    <>
    <Listing
    dataArray = {dataArray}/>
    </>
  )
}

export default App
