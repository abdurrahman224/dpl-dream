// import React, { useState } from "react";

// const Cart = ({player,Playerc}) => {
//   const Cart = ({ player, Playerc }) => {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (player) => {
//     // prevent duplicates
//     const exists = cart.find((item) => item.playerId === player.playerId);
//     if (!exists) {
//       setCart((prev) => [...prev, player]);
//       console.log("Player added to cart:", player);
//     } else {
//       console.log("Player already in cart");
//     }
//   };

//   return (
//     <div>
//       <div className=" flex flex-row gap-5 border-1 px-7 py-3 rounded-2xl">
//         <button onClick={() => {}}>Available</button>
//         <button onClick={()=>handleAddToCart(player),Playerc()}>Selected</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


const Cart = ({ selected }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Selected Players ({selected.length}/11)</h3>
        <p className="text-sm text-gray-500">Total Players: {selected.length}</p>
      </div>

      <div className="space-y-3">
        {selected.map((player) => (
          <div
            key={player.playerId}
            className="flex justify-between items-center p-2 bg-gray-50 rounded"
          >
            <div>
              <p className="font-semibold">{player.name}</p>
              <p className="text-sm text-gray-600">{player.role}</p>
            </div>
            <p className="text-green-600 font-medium">${player.biddingPrice}</p>
          </div>
        ))}
      </div>

      {selected.length === 0 && (
        <p className="text-center text-gray-500 my-4">No players selected yet</p>
      )}
    </div>
  );
};

export default Cart;
