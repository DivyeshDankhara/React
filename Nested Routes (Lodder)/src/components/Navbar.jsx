import React from "react";
import {Link , NavLink , Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="">
                <div className="bg-blue-500 p-3 text-white flex gap-3 justify-center">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='help'>Help</NavLink>
                    <NavLink to='career'>Career</NavLink>
                </div>
                <Outlet/>
            </div>
        </>
    )
}

export default Navbar