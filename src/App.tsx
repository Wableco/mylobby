
import './App.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/home.component'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
