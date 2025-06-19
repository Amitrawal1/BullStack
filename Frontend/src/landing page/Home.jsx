import Navbar from "./Navbar"
import SignUp from "./Signup/Signup"
import Pricing from "./Pricing/Pricing"
import Tool from "./Tools/Tools"
import Platform from "./Platform/Platform"
import Support from "./Support/Support"
import Review from "./Review"
import Footer from "./Footer"
import About from "./About"
import './Home.css'

export default function Home(){
    return(
        <>
        <div className="Home">
            <div className="front">
                <div className="title">
                    <h1>Smart Investing Starts Here</h1>
                    <h3>BullStack: Stocks, Derivatives, Mutual Funds,</h3>
                    <h3>ETFs, and Bonds - All in One Platform.</h3>
                </div>
                <div className="front_pic"></div>
            </div>
            <SignUp/>
            <Pricing/>
            <Tool/>
            <Platform/>
            <About/>
            <Support/>
            <Review/>
        </div>
        </>
    )
}