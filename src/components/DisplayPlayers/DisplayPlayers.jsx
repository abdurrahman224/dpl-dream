import { RiAccountCircleLine } from "react-icons/ri";
import { IoFlag } from "react-icons/io5";
import { useState } from "react";

const DisplayPlayers = ({ players, getValue }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { image, name, country, biddingPrice, role, battingType } = players;

  const handleSelect = async () => {
    setIsLoading(true);
    try {
      await getValue(biddingPrice, players);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-xl shadow-lg shadow-green-800/40 p-4 hover:shadow-green-600/60 transition-all duration-300">
        {/* Image with fixed aspect ratio */}
        <div className="relative w-full pb-[75%] mb-4">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover p-3 rounded-2xl"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <RiAccountCircleLine className="text-2xl md:text-3xl text-gray-600 flex-shrink-0" />
          <span className="truncate">{name}</span>
        </h3>

        <div className="flex flex-wrap justify-between items-center gap-2 my-3">
          <p className="flex items-center gap-2 text-gray-700">
            <IoFlag className="text-xl text-gray-600 flex-shrink-0" />
            {country}
          </p>
          <p className="text-gray-500 font-medium">Role: {role}</p>
        </div>

        <hr className="border-gray-200" />
        
        <div className="my-3">
          <p className="text-lg font-bold mb-2">Player Info</p>
          <div className="flex justify-between items-center text-sm">
            <p className="font-medium">Batting Style:</p>
            <p className="text-gray-700">{battingType}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-gray-700">
            ${biddingPrice.toLocaleString()}
          </p>
          <button
            onClick={handleSelect}
            disabled={isLoading}
            className={`px-4 py-2 rounded-xl transition-all duration-200 ${
              isLoading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            {isLoading ? "Selecting..." : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayPlayers;
