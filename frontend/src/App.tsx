import Navbar from "./components/Navbar/Navbar"
import Dashboard from './pages/Dashboard/Dashboard'
import Record from './pages/Record/Record'
import Upload from './pages/Upload/Upload'
import Library from './pages/Library/Library'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex'>
      <Navbar />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='record' element={<Record />} />
        <Route path='upload' element={<Upload />} />
        <Route path='library' element={<Library />} />
      </Routes>
    </div>
  )
}

export default App
