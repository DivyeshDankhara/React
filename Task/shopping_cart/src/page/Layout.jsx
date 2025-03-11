import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Shop from './Shop'
import Cart from './Cart'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>


            <Route path='/' element={<Shop />} />
            <Route path='cart' element={<Cart />} />
        </Route>
    )
)

const Layout = () => {
    return (

        <div className=''>
            <RouterProvider router={router}></RouterProvider>

        </div>
    )
}

export default Layout