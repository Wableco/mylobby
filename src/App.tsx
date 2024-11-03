import './App.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/home/HomeComponent'
import NavbarComponent from './components/navbar/NavbarComponent'
import AboutComponent from './components/about/AboutComponent'

function App() {

  return (
    <>
      <HashRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutComponent />} />
          <Route path='/contact' element={<Home />} />
          <Route path='/cats' element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
