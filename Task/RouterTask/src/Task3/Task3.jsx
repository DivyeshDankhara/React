import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Help from "./Help";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Error from "./Error";
import User from "./User";
import { BrowserRouter , Router , Route } from 'react-router-dom';
import { createBrowserRouter , createRoutesFromElements , RouterProvider } from 'react-router-dom';
import UserDetails from "./UserDetails";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/> 
        <Route path="about" element={<About/>}/> 
        <Route path="help" element={<Help/>}>
            <Route path="faq" element={<Faq/>}/>
        </Route> 
        <Route path="user" element={<User/>}>
          <Route path=":id" element={<UserDetails/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
    </Route>
  )
)

const Task6 = () => {
    return(
        <RouterProvider router={router}/>
    )
}

export default Task6
