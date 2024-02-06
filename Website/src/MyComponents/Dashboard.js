import React from 'react'
//import axios from 'axios';
import './Dashboard.css'
import { useLocation } from 'react-router-dom';


function Dashboard() {
  // const [highestBid, setHighestBid] = useState(0);
  // const [numberOfBids, setNumberOfBids] = useState(0);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get('/api/bids');
  //     setHighestBid(response.data.highestBid);
  //     setNumberOfBids(response.data.numberOfBids);
  //   }
  //   fetchData();
  // }, []);

  const location = useLocation();
  const state = location.state;
  console.log(state);

    return (
        <div>
          <h1 className = "head">Admin Dashboard</h1>
          <p className="P1">Number of Bids: {state}</p>
          <p className="P1">Highest Bid:4000$</p>
          <h4 className = "pro">"The perfect bidder is always the winner!!!"</h4>
        </div>
      );
    }

export default Dashboard







// import React, { useState } from 'react';

// function BidButton() {
//   const [isBidding, setIsBidding] = useState(false);

//   function handleClick() {
//     setIsBidding(prevState => !prevState);
//   }

//   return (
    
//     <button onClick={handleClick}>
//       {isBidding ? "Cancel Bid" : "Bid"}
      
//     </button>
//   );
// }

// export default BidButton;
//In this example, we use the useState hook to keep track of the button's state. The initial state is false, which means the button says "Bid". When the button is clicked, the handleClick function is called, which toggles the state between true and false using the setIsBidding function. The button's text is determined by the ternary operator, which checks the state and displays "Cancel Bid" if it's true, and "Bid" if it's false.









