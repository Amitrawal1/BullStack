import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="w-full h-20 bg-[#E6CCFF] flex justify-between items-center text-[#A64DDF]">
            {/* Logo or Icon */}
            <div
                className="mt-8 h-32 w-32 bg-cover flex items-center justify-center"
                style={{ backgroundImage: "url('../assets/icon.png')" }}
            ></div>

            {/* Navigation Links */}
            <div className="flex pl-[30rem] space-x-16">
                <Link to="/" className="hover:underline font-medium">Home</Link>
                <Link to="/about" className="hover:underline font-medium">About</Link>
                <Link to="/support" className="hover:underline font-medium">Support</Link>
                <Link to="/pricing" className="hover:underline font-medium">Pricing</Link>
            </div>

            {/* Signup Button */}
            <Link
                className="font-semibold mr-16 flex items-center justify-center bg-[#A64DDF] text-white h-8 w-24 rounded-full"
                to="/SignUp"
            >
                Signup
            </Link>
        </div>
    )
}
