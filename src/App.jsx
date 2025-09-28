import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/cards' element={<Cards />} />



    </Routes>
  )
}

export default App
