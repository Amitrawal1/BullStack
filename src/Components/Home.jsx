import React from 'react';
import Dashboard from "./Dashboard";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import "./Home.css"

// You can create a new CSS file for Home or add these styles to index.css/App.css
import './Home.css'; 

export default function Home() {
  return (
    
    <div className="home-container"> 
      <Navbar />
      <div className="main-content">
        <Leftbar />
        <Dashboard />
        
      </div>
    </div>
  );
}