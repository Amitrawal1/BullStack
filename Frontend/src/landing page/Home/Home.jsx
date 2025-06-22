import Hero from "./Hero"
import SignUp from "../Signup/Signup"
import Pricing from "../Pricing/Pricing"
import Tools from "../Tools/Tools"
import Platform from "../Platform/Platform"
import About from "../About/About"
import Support from "../Support/Support"
import Review from "./Review"
import './Home.css'




export default function Home(){
    return(
        <>
            <Hero/>
            <SignUp/>
            <Pricing/>
            <Tools/>
            <Platform/>
            <About/>
            <Support/>
            <Review/>
        </>
    )
}