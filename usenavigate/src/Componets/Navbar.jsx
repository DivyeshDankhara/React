import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex space-x-4 bg-orange-100 p-10 justify-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="AboutUs">Aboutus</NavLink>
                <NavLink to="Help">Help</NavLink>
                <NavLink to="Carrer">Carrer</NavLink>
                <NavLink to="Login">Login</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
