import signupImg from '../../assets/images/signup.png'
export default function Signup(){
    return(
        <>
        <section className="w-full min-h-screen bg-[#EBD6FF] flex items-center justify-center px-6">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center border      border-black p-8 rounded-xl">
          {/* Left Side: Text + Input */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Grow Your Wealth with Confidence
            </h1>
            <p className="text-lg text-black">
              Start Your Journey with <span className="font-semibold">BullStack</span>.
            </p>

            {/* Input and Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="+91"
                className="px-6 py-3 rounded-full text-black bg-white w-50% sm:w-auto focus:outline-none"
              />
              <button className="px-6 py-3 bg-[#9333EA] text-white rounded-full hover:bg-purple-700 transition">
                Open Demat Account
              </button>
            </div>

            {/* Terms */}
            <p className="text-sm text-black">
              By proceeding, you agree to the BullStack{" "}
              <a href="#" className="underline font-medium">
                terms
              </a>{" "}
              &{" "}
              <a href="#" className="underline font-medium">
                privacy policy
              </a>
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center items-center">
            <img
            src={signupImg} // Replace with your image path
            alt="Signup"
            className="w-full max-w-md"
            />
          </div>
        </div>
      </section>
      </>
    )
}
 