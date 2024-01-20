import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex'>
      <Navbar />

      <Routes>
        <Route index element={
          <div>
            <h1>Plat</h1>
            <p>
              what's up guys plat here 
              <a>plat</a>
            </p>
            <button className=''>What's good</button>
            <input></input>
          </div>
        } />


      </Routes>
    </div>
  )
}

export default App
