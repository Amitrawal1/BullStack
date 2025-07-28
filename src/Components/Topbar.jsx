import React from 'react';
import './Topbar.css'; // Import the CSS file

export default function Topbar() {
  return (
    
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{23567.00}</p> {/* Example value */}
          <p className="percent">(+0.39%)</p> {/* Example value */}
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{77341.08}</p> {/* Example value */}
          <p className="percent">(+0.42%)</p> {/* Example value */}
        </div>
      </div>
      
  );
}