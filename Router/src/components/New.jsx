import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Cart from '../Pages/Cart'
import Faq from '../Pages/Faq'
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
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                },
                {
                    path:"/faq",
                    element:<Faq/>
                }
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

