import React from 'react'
import {NavLink , Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-400'>
        <ul className='flex justify-center gap-4 text-white text-xl p-4'>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about" >About</NavLink></li>
            <li><NavLink to="/faq" >Faq</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Navbar
