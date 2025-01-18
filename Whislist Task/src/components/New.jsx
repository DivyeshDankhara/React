import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Whishlist from '../Pages/Whishlist'
import Navbar from './Navbar'

const New = () => {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Navbar/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                },
                {
                    path:"/whishlist",
                    element:<Whishlist/>
                },
            ]
        }
    ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default New

