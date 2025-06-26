
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from '../../components/Navbar/Navbar';
import Home from './Home.jsx'
import Packages from "./Packages.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";



import'./Nav.css'



function Naveb(id="j") {
  return (

    <>
       <BrowserRoute >

}

<Routes >  

<Route path="/Home" element={<Home />} /> 
<Route path="/Packages" element={<Packages />} /> 
 <Route path="/About" element={<About />} /> 
  <Route path="/Contact" element={<Contact />} /> 
 


       

</Routes>

      </BrowserRoute>
     
      
    </>
  );
}

export default Navbar;