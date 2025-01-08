import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Aboutus from './Pages/About/Aboutus'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import Navbar from './Components/Navbar/Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App