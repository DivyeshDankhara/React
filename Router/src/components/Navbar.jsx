import React from 'react'
import { Link , Outlet, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='bg-blue-500 p-4'>
        <nav className='flex justify-end'>
            <ul className='flex space-x-3'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/faq">Faq</NavLink></li>
            </ul>
        </nav>
      </div>
      <Outlet/> 
    </div>
  )
}

export default Navbar
