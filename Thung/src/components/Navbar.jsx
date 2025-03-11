import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

const cartItem = useSelector((state) => state.cart)

console.log(cartItem);

  return (
    <div>
      <ul className='flex justify-evenly p-4 bg-purple-700 text-white font-black'>
        <li><NavLink to="/">SHOP</NavLink></li>
        <li><NavLink to="/cart">CART ({cartItem.length})</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
