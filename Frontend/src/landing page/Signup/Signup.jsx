import './Signup.css'
export default function SignUp(){
    return(
        <>
        <div className="signup">
            <div className="titles">
            <h3>Grow Your Wealth with Confidence</h3>
            <h4>Start Your Journey with BullStack.</h4>
            <div className="inputs">
                <div className="input">
                <input type="text" placeholder="phone no" />
                <button>Open Demate Account</button>
                </div>
                <p>By proceeding, you agree to the BullStack terms & privacy policy</p>
            </div>
            
            </div>
            <div className="signup_pic"></div>
        
        </div>

        </>
    )
}