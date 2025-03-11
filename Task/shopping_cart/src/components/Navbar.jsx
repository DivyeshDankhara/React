import React from 'react'

import { Link, NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>

            <header className='bg-blue-500'>
                <nav className='w-full flex justify-center mx-3 lg:mx-0 py-5 items-center'>

                    <ul className='flex gap-4 font-semibold text-lg '>
                        <li> <NavLink to='/'>Shop</NavLink></li>
                        <li> <NavLink to='/cart'>Cart</NavLink></li>
                    </ul>

                </nav>
            </header>



            <Outlet />
        </div>
    )
}

export default Navbar


