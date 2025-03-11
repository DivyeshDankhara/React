import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/shop' element={<Shop />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/wishlist' element={<Wishlist />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout