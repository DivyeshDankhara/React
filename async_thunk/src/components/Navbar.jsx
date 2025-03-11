import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RiShoppingBag4Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";

const Navbar = () => {
    const { cartItem } = useSelector((state) => state.cart);
    const { wishlistItem } = useSelector((state) => state.wishlist);
    return (
        <div>
            <ul className='flex justify-center gap-6 bg-[#2C3531] text-[#D1E1E2] py-3'>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/shop"><li>Shop</li></NavLink>

                <NavLink to="/cart">
                    <li className='flex items-center justify-center relative top-1'><RiShoppingBag4Line /><span className='absolute left-4 -top-1 text-xs'> {cartItem.length}</span></li>
                </NavLink>
                <NavLink to="/wishlist" >
                    <li className='flex items-center justify-center relative top-1'><FiHeart />
                        <span className='absolute left-4 -top-1 text-xs'> {wishlistItem.length}</span>
                    </li>
                </NavLink>
            </ul>
            <Outlet />
        </div>
    )
}

export default Navbar