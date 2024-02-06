import React from 'react'
import auction from "../Images/auction.png"
//import { useLocation } from 'react-router-dom'

import { Footer } from './Footer'
const Home = () => {
  
  return (
    <div className="container">
      <h3 className = "text-center">Merchandise</h3>
      <h6 className = "text-center">Buy and Sell</h6>
      <h4 className = "pro">"Whatever suits your eye, just bid it and give it a try..."</h4>
      <img className = "img1" src = {auction} alt ="logo"  />
       <Footer/>
      
    </div>
  )
}

export default Home


