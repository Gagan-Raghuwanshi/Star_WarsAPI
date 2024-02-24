import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import People from './Components/People'
import Planets from './Components/Planets'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/people' element={<People/> } />
      <Route path='/planets' element={<Planets/> } />
    </Routes>
     
      
    </>
  )
}

export default App
