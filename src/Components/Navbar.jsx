import React, {useState} from "react";
import { Link } from "react-router-dom";


import "./Navbar.css";
export default function Navbar(){
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleMenuClick = (index) =>{
        setSelectedMenu(index);
    }

    const handleProfileClick = (index) =>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const menuClass = "menu";                   // hover class in css
    const activeMenuClass = "menu Selected";      // hover class in css

    return(
        <>
        <div className="Navbar">
            <div className="user">User</div>
            <div className="menu">
                <div className="d">
                    <Link style={{textDecoration: "none"}} to="/" onClick={()=>handleMenuClick(0)} >
                        <p className={selectedMenu===0 ? activeMenuClass : menuClass} >Dashboad</p>
                    </Link>
                </div>
                <div className="d">
                    <Link style={{textDecoration: "none"}} to="/orders" onClick={()=>handleMenuClick(1)} >
                        <p className={selectedMenu===1 ? activeMenuClass : menuClass} >Orders</p>
                    </Link>
                </div>
                <div className="d">
                    <Link style={{textDecoration: "none"}} to="/holdings" onClick={()=>handleMenuClick(2)} >
                        <p className={selectedMenu===2 ? activeMenuClass : menuClass} >Holdings</p>
                    </Link>
                </div>
                <div className="d">
                    <Link style={{textDecoration: "none"}} to="/positions" onClick={()=>handleMenuClick(3)} >
                        <p className={selectedMenu===3 ? activeMenuClass : menuClass} >Positions</p>
                    </Link>
                </div>
                <div className="d">
                    <Link style={{textDecoration: "none"}} to="/funds" onClick={()=>handleMenuClick(4)} >
                        <p className={selectedMenu===4 ? activeMenuClass : menuClass} >Funds</p>
                    </Link>
                </div>
            </div>
        </div>
        
        </>
    )
}