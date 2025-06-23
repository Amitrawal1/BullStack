export default function Signup_Page() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      
      {/* Left Panel */}
      <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-800 text-white text-center p-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Start Your Journey <br /> With BullStack.
        </h1>
      </div>

      {/* Right Panel */}
      <div className="md:w-1/2 bg-purple-100 flex flex-col justify-center items-center p-8">
        <div className="max-w-sm w-full text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Welcome To BullStack</h2>

          {/* OTP input */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              OTP
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-1">or</p>

          {/* Email input */}
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-2 mb-4 border-b border-gray-400 bg-transparent focus:outline-none"
          />

          {/* Continue with Google */}
          <button className="flex items-center justify-center gap-2 w-full bg-purple-600 text-white py-2 rounded-full font-semibold mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Continue with Google
          </button>

          {/* Final Button */}
          <button className="bg-purple-800 text-white px-6 py-2 rounded-full font-semibold w-full">
            Let’s Go
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-600 mt-4">
            By proceeding, you agree to the BullStack{" "}
            <a href="#" className="underline">terms</a> &{" "}
            <a href="#" className="underline">privacy policy</a>.
          </p>

          {/* Illustration (optional) */}
          <div className="mt-6">
            <img src="/media/signup.png" alt="illustration" className="w-32 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
