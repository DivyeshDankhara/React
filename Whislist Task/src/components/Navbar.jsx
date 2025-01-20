import React from 'react'
import { Link , Outlet, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='bg-blue-500 p-4'>
        <nav className=''>
            <ul className='flex justify-center space-x-3 text-white'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
                <li><NavLink to="/whishlist">Whishlist</NavLink></li>
            </ul>
        </nav>
      </div>
      <Outlet/> 
    </div>
  )
}

export default Navbar
