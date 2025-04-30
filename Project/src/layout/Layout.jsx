import React from 'react'
import { PageObj } from '../pages/PageObj';
import { createBrowserRouter , RouterProvider , Route } from "react-router-dom";

const Layout = () => {
    const List = createBrowserRouter([
        {
            path: "/",
            element: PageObj.navbar,
            children: [
                {
                    path: "/",
                    element: PageObj.home,
                },
                {
                    path: "/shop",
                    element: PageObj.shop,
                },
                {
                    path: "/products",
                    element: PageObj.products,
                },
                {
                    path: "/pages",
                    element: PageObj.pages,
                },
                {
                    path: "/blog",
                    element: PageObj.blog,
                },
            ]
        }
    ])

  return (
    <div>
        <RouterProvider router={List} ></RouterProvider>
    </div>
  )
}

export default Layout
