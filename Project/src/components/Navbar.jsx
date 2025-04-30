import React from 'react'
import logo from '../asset/logo.svg'
import { NavLink,Outlet } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { VscListSelection } from "react-icons/vsc";
const Navbar = () => {
  return (
    <div>
      <div className='relative'>
      <div className="flex items-center justify-between bg-transparent lg:p-9 md:p-6 p-3 absolute z-10 w-full">
        <div className='lg:hidden block'>
          <ul className='text-2xl font-medium'>
            <li><VscListSelection /></li>
          </ul>
        </div>
        <div>
          <img className="sm:h-5 md:h-5" src={logo} alt="" />
        </div>
        <div className='lg:block hidden'>
          <nav>
            <ul className="flex gap-10 text-base font-medium">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li> 
              <li>
                <NavLink to="/pages" className='flex items-center gap-2'>Pages<IoIosArrowDown /></NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </nav>
          {/* md:text-3xl font-semibold sm:text-2xl sm:font-bold text-xl */}
        </div>
        <div>
          <ul className="flex gap-4 sm:text-2xl text-xl">
            <li><IoSearchOutline /></li>
            <li className='md:block hidden'><FiUser /></li>
            <li className='md:block hidden'><IoMdHeartEmpty /></li>
            <li><RiShoppingBag2Line /></li>
          </ul>
        </div>
      </div>
    </div>
      <Outlet />
    </div>
  )
}

export default Navbar
