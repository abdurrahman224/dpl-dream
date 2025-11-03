const Navbar = ({ coin }) => {
  return (
    <>
      <nav>
        <div className=" md:flex justify-between items-center mt-12 mb-5">
          <div>
            <img src="/assets/logo.png" alt="" />
          </div>
          <div>
            <ul className="flex gap-12 text-xl items-center">
              <li>Home</li>
              <li>Fixture</li>
              <li>Teams</li>
              <li>Schedules</li>
              <li className="text-yellow-400 font-semibold border border-yellow-400 rounded-2xl px-6 py-2  hover:text-black transition-all duration-300 cursor-pointer ">
                Coin {coin}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
