import React from "react";
import logo from '../asset/logo.svg';
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="" />
                <p>Address: 1234 Fashion Street, Suite 567,</p>
                <p>New York, NY 10001</p>
                <p>Email: <span>info@fashionshop.com</span></p>
                <p>Phone: <span>(212) 555-1234</span></p>
                <p className="flex">Get direction<MdArrowOutward /></p>
                <div>

                </div>
            </div>
        </div>
    )
} 

export default Footer