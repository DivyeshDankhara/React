import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Help from "./Help";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Careerdata from "./Careerdata";
import { BrowserRouter , Router , Route } from 'react-router-dom';
import { createBrowserRouter , createRoutesFromElements , RouterProvider } from 'react-router-dom';
import Career, { CareerLoader } from "./Career";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/> 
        <Route path="about" element={<About/>}/> 
        <Route path="help" element={<Help/>}>
            <Route path="faq" element={<Faq/>}/>
            <Route path="contactUs" element={<ContactUs/>}/>
        </Route> 
        <Route path="career" element={<Careerdata/>}>
          <Route index element={<Career/>} loader={CareerLoader}/>
        </Route>
    </Route>
  )
)

const Task7 = () => {
    return(
        <RouterProvider router={router}/>
    )
}

export default Task7
