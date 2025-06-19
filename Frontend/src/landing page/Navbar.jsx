import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <>
        <div className="Navbar">
            <div className="icon"></div>
            <div className="sec">
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Support</h4>
                <h4>Pricing</h4>
            </div>
            <Link className="signups" to="/SignUp">
                Signup
            </Link> 
                
                
        </div>
        </>
    )
}