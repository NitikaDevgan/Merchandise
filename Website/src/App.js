import './App.css';
import { Route,Routes } from "react-router-dom";
import Navbar from "./MyComponents/Navbar";
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import Contact from "./MyComponents/Contact";
import Bidding from "./MyComponents/Bidding";
// import Cardholder from "./MyComponents/Cardholder";
import Login from "./MyComponents/Login";
import Registration from "./MyComponents/Registration";
import Dashboard from './MyComponents/Dashboard';

// import {Footer} from "./MyComponents/Footer";

  


function App() {
   
   
      
  return (
    <>
       <Navbar  />
       <Routes>
       <Route exact path = "/" element ={<Home />}/> 
       <Route  path = "/About" element ={<About />} />
       <Route  path = "/Contact" element = {<Contact />} />
       {/* <Route  path = "/Cardholder" element = {<Cardholder />} /> */}
       <Route  path = "/Bidding" element = {<Bidding />} />
       <Route  path = "/Dashboard" element = {<Dashboard />} />
       <Route  path = "/Login" element = {<Login />} />
       <Route  path = "/Registration" element = {<Registration />} />
       </Routes> 
       
       

       {/* <Footer/> */}
    </>
    
   );
}

export default App
