/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment,useState } from 'react'
import AuctionDetail from '../Details/AuctionDetail'
// import Img1 from "../Images/Img1.jpg"
// import img2 from "../Images/img2.jpg"
// import img3 from "../Images/img3.jpg"
// import img4 from "../Images/img4.jpg"
// import img6 from "../Images/img6.jpg"
import "./Bidding.css"
// import { Footer } from './Footer'
import Countdown from './Countdown';
import "./Dashboard"
import "./Dashboard.css"
import { Link } from 'react-router-dom';

// function Bidding() {
//   const [currentView, setCurrentView] = useState('Bidding');

const Bidding = () => {

      // const [details] = useState(AuctionDetail)
      const [details] = useState(AuctionDetail)

      const [num,setNum ] = useState(0);
   
      const incNum = () => {
        setNum(num+1);
      }
      
      const bid = num;

  return (
    <Fragment>
      <Countdown seconds ={120} />
      {/* {currentView === 'Bidding' && <Bidding />}
      {currentView === 'Dashboard' && <Dashboard />}
      
      <button onClick={() => setCurrentView('Bidding')}>Bidding</button>
      <button onClick={() => setCurrentView('Dashboard')}>Place a bid</button> */}
      <section className="Auction">
        <div className= "center">
          <h3>Online Bidding</h3>

        </div>  

        <div className = "row1">
          
          {
             details.map((details)=> {
              return(
                <div className="Column">
                <div className = "single-auction">
                  <div className = "card">
                    <div className = "auction-thumb">
                      <div className ="auction-tag">For auction</div>
                      
                      <img  className  = "img" src = {details.Image} alt ="Bid"  />
                    </div>
                <div className="Auction-content">
                     <h3>{details.heading}</h3>
                     <div className ="mark">
                      <i class= "fa-solid fa-location-dot"></i>
                      <span>{details.span}</span>
                     </div>
                     <span className="amount">{details.amount}</span>
                    </div>
                    <div className="auction-footer">
                       <ul>
                        <li>
                          <span>{details.Art}</span>
                        </li>
                        <li>
                        <img className = "img" src = {details.Art2Image} alt ="Art"  />
                        <span>{details.Art}</span>
                        </li>
    
                        <li>
                        <img  className = "img" src = {details.ArtImage} alt ="Art2"  />
                        <span>{details.Art}</span>
                        </li>
    
                      </ul> 
                      <input type = "submit" name = "submit" id = "bid"className="form-submit" 
                      onChange={incNum} value = "Place a bid" />
                      <button onClick={incNum}> + </button>
                      <button >
                          <Link to= "/Dashboard" state={bid}> Go to Dashboard </Link>
                      </button>
                      <h6>{num}</h6>
                    </div> 
                  </div>
                </div>
              </div>
             
              )
             })
          }
             
      <div className="more-auction">
          <a className='auction-btn' href= "#" text-align = "center">More Auctions</a>
      </div> 
       </div> 
        
          
      </section>
      
    </Fragment>
  )
}

export default Bidding

