const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center gap-10 mt-40 pt-20">
      {/* Newsletter Section */}
      <div className="w-[90%] max-w-5xl bg-gradient-to-r from-blue-50 via-white to-orange-50 rounded-2xl shadow-xl text-center p-10 ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mt-2">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold rounded-lg hover:opacity-90"
            onClick={() => window.open("/thank-you", "_blank")}
          >
            Subscribe
          </button>
        </div>
      </div>
      <img src="/assets/logo-footer.png" alt="Logo" className="w-24 " />
      {/* Main Footer */}
      <div className="w-[90%] max-w-5xl flex flex-col md:flex-row justify-between text-gray-300 gap-10 ">
        {/* About Us */}

        <ul>
          <h4 className="font-bold text-lg mb-2 text-white">About Us</h4>
          <li>We are a passionate team</li>
          <li>dedicated to providing the best</li>
          <li>services to our customers.</li>
        </ul>

        {/* Quick Links */}
        <ul>
          <h4 className="font-bold text-lg mb-2 text-white">Quick Links</h4>
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Subscribe Text (Footer Small One) */}
        <ul>
          <h4 className="font-bold text-lg mb-2 text-white">Stay Connected</h4>
          <p>Follow us on social media for daily updates.</p>
               <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold rounded-lg hover:opacity-90"
            onClick={() => window.open("/thank-you", "_blank")}
          >
            Subscribe
          </button>
        </div>
        </ul>
      </div>

      <hr className="border-gray-700 w-[90%]" />
      <p className="text-gray-400 text-sm mb-10">
        © 2024 DPL Dream. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
