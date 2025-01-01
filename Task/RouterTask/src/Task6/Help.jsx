import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const Help = () => {
  return (
    <div>
      <h1 className='heading'>This is Help page.</h1>
      <br />
      <nav className='gap-4 flex'>
        <Link to='faq' className='bg-blue-400 py-2 px-4 rounded-md'>Faq</Link>
        <Link to='contactUs' className='bg-blue-400 py-2 px-4 rounded-md'>ContactUs</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Help
