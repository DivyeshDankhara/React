import './App.css'
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Help from "./Pages/Help";
import CareerLayout from './Pages/CareerLayout';
import Faq from "./Pages/Faq";
import ContactUs from "./Pages/ContactUs";
import Career, { CareerLoader } from './Pages/Career';
import { BrowserRouter , Router , Route } from 'react-router-dom';
import { createBrowserRouter , createRoutesFromElements , RouterProvider } from 'react-router-dom';
import { CareerDetailsData } from './Pages/CareerDetails';
import CareerDetails from './Pages/CareerDetails';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About/>}/>
      <Route path="help" element={<Help/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contactUs" element={<ContactUs/>}/>
      </Route>
      <Route path="career" element={<CareerLayout/>}>
        <Route index element={<Career/>} loader={CareerLoader}/>
        <Route path=':id' element={<CareerDetails/>} loader={CareerDetailsData}/>
      </Route>
    </Route>
  )
)

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )

}

export default App
