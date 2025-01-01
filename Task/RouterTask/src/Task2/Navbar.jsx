import React from 'react'
import {NavLink , Link , Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-400'>
        <ul className='flex justify-center gap-4 text-white text-xl p-4'>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/faq" >Faq</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Navbar
