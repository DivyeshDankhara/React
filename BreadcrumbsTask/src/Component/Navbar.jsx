import React from 'react'
import { Link  , useLocation} from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='bg-blue-500 p-5 space-x-8 flex justify-center'>
      <Link to="/">Home</Link>
      <Link to="/aboutus">Aboutus</Link>
      <Link to="/post">Post</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar