import Cart from "../Cart/Cart";


const Banner = ({hedelClick, selected}) => {
  
  // console.log(component);
 
    
    return (



<>
<div className="bg-gradient-to-r from-blue-50 via-white to-orange-50 w-full h-96 flex flex-col items-center justify-center text-center rounded-2xl mt-2">
  <img
    className="w-48 h-auto mb-4"
    src="/assets/banner-main.png"
    alt="Banner"
  />
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
    Assemble Your Ultimate Dream 11  Cricket Team</h1>
    <p className="text-2xl font-medium text-white">Beyond Boundaries Beyond Limits</p>

    <button className="py-4 px-6 mt-4 border-2 border-4 rounded-2xl bg-[#E7FE29]" onClick={hedelClick}>Claim Free Credit</button>
</div>
<div className=" flex justify-between mt-20 p-3">
      <div>
        <h2 className="text-4xl font-bold  ">Available Players</h2>
      </div>
     <Cart selected={selected}></Cart>
    </div>
</>
    );
};

export default Banner;