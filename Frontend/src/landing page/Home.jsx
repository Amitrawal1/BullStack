import Navbar from "./Navbar"
import SignUp from "./Signup/Signup"
import Pricing from "./Pricing/Pricing"
import Tool from "./Tools/Tools"
import Platform from "./Platform/Platform"
import Support from "./support"
import Review from "./Review"
import Footer from "./Footer"
import About from "./About"
import './Home.css'

export default function Home(){
    return(
        <>
        <div className="Home">
            <Navbar/>
            <SignUp/>
            <Pricing/>
            <Tool/>
            <Platform/>
            <About/>
            <Support/>
            <Review/>
            <Footer/>
        </div>
        </>
    )
}