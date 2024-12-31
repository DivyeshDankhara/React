import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Cart from '../Pages/Cart'
import Faq from '../Pages/Faq'
import Navbar from './Navbar'

const Old = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="/about" element={<About/>}>Home</Route>
            <Route path="/cart" element={<Cart/>}>Home</Route>
            <Route path="/faq" element={<Faq/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Old