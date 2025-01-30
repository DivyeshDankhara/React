import React from 'react'
import { Link ,Outlet } from 'react-router-dom'

const Help = () => {
  return (
    <div className="">
      <div>
        <h1 className='font-bold text-5xl p-4'>This is Help Page</h1>
        <p className='bg-yellow-100 text-2xl p-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, eos! Possimus voluptatum ullam, error eveniet dignissimos rerum labore, perferendis dolorem illum autem modi, qui officiis sapiente animi fugiat aspernatur provident nobis quam ab veritatis optio? Consequatur modi, nihil sint, ipsum, laudantium blanditiis in vero soluta veniam provident ipsam cupiditate velit.</p>
      </div>
      <Link to="FAQ" className='heading' >FAQ</Link>
      <Link to="ContactUs" className='heading'>ContactUs</Link>
      <Outlet />
    </div>

  )
}

export default Help
