import './Navbar.css'
export default function Navbar(){
    return(
        <>
        <div className="Navbar">
            <div className="icon"></div>
            <div className="sec">
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Support</h4>
                <h4>Search</h4>
            </div>
            <div className="signup">
                Signup
            </div>
        </div>
        </>
    )
}