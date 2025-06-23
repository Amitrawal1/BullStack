import supportImg from '../../assets/images/support.png'; // replace path as needed

export default function Support() {
  return (
    <section className="bg-purple-500 text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold">Support Center</h1>
        <p className="text-lg font-medium">
          Find answers, troubleshoot issues, or create a new support ticket.
        </p>

        {/* Search Input */}
        <div className="flex bg-white items-center px-4 py-3 rounded-md w-full text-black">
          <input
            type="text"
            placeholder="Eg: How to open a Demat account, margin requirements..."
            className="flex-grow outline-none placeholder:text-gray-500"
          />
          <span className="text-2xl text-gray-700">&#128269;</span> {/* search icon */}
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 text-sm underline text-white font-medium">
          <a href="#">Track your account opening status</a>
          <a href="#">Check Intraday margins</a>
          <a href="#">Track your segment activation</a>
          <a href="#">User manuals and platform guides</a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2">
        <img
          src={supportImg}
          alt="Support illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}
