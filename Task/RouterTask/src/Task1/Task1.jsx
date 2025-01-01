import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Faq from './Faq'
import Navbar from './Navbar'

const Task1 = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/about' element={<About/>}>About</Route>
            <Route path='/faq' element={<Faq/>}>Faq</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Task1
