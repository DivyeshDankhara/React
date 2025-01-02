import './App.css'
// import Task1 from './Task1/Task1'
// import Task2 from './Task2/Task2'
import Task3 from './Task3/Task3'
import Task5 from './Task5/Task5'
import Task6 from './Task6/Task6'
import Task7 from './Task7/Task7'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Bread Crumbs/Home';
import About from './Bread Crumbs/About';
import Contact from './Bread Crumbs/Contact';
import Breadcrumbs from './Bread Crumbs/BreadCrumbs';

function App() {

  return (
    <>
    {/* <Task1/> */}
    {/* <Task2/> */}
    {/* <Task3/> */}
    {/* <Task5/> */}
    {/* <Task6/> */}
    {/* <Task7/> */}
    <Router>
      <div>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
