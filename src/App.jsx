import './App.css'
import React from 'react'
import{Route,Routes} from'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Signup from'./pages/signup'
import Navbar from './components/nav'

 function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
  )
}

export default App
