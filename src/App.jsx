import './App.css'
import React from 'react'
import{Route,Routes} from'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Signup from'./pages/Signup'
import Navbar from './components/Nav'
import Profile from './pages/profile'
import Productdesc from './pages/Productdesc'

 function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/product/:pid' element={<Productdesc/>}/>
        </Routes>
      </div>
  )
}

export default App
