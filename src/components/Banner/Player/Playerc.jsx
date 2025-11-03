
import React from "react";

const DisplayPlayers = ({ player, getValue, isSelected }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-green-600/60 transition-shadow duration-300">
      <img
        src={player.image}
        alt={player.name}
        className="object-cover w-full h-48 rounded-2xl mb-4"
      />

      <h3 className="text-xl font-semibold mb-2">{player.name}</h3>

      <p className="text-gray-700 mb-1">Country: {player.country}</p>
      <p className="text-gray-700 mb-1">Role: {player.role}</p>
      <p className="text-gray-800 font-bold mb-2">Price: ${player.biddingPrice}</p>

      <button
        onClick={() => getValue(player.biddingPrice, player)}
        disabled={isSelected}
        className={`px-4 py-2 rounded-xl w-full font-semibold transition-colors duration-200 ${
          isSelected
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-green-400 hover:bg-green-500 text-white"
        }`}
      >
        {isSelected ? "Selected" : "Choose Player"}
      </button>
    </div>
  );
};

export default DisplayPlayers;
