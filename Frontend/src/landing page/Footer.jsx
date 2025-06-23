

export default function Footer() {
  return (
    <footer className="bg-[#b939eb] text-white py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Logo + Address */}
        <div className="flex flex-col items-start">
          <img src="logo" alt="BullStack Logo" className="h-10 mb-2" />
          <p>Sonu Sadan, Jhansi<br />Uttar Pradesh</p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-3/4 text-sm font-medium">
          <div>
            <h4 className="font-bold mb-2">COMPANY</h4>
            <ul className="space-y-1">
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Open Source</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">BULLSTACK</h4>
            <ul className="space-y-1">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Trust & Safety</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">ACCOUNT</h4>
            <ul className="space-y-1">
              <li><a href="#">Open an Account</a></li>
              <li><a href="#">Fund Transfer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
