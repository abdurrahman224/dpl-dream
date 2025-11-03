import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import DisplayPlayers from "./components/DisplayPlayers/DisplayPlayers";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [coin, setCoin] = useState(0);
  const [player, setplayer] = useState([]);
    const [selected, setSelected] = useState([]);


  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setplayer(data));
  }, []);

  // console. (biddingPric);

  const hedelClick = () => {
    setCoin((prevCoin) => prevCoin + 100000); 
    // Give 100,000 coins when claimed
    toast("Give 100,000 coins")
  };

  const getValue = (biddingPrice, player) => {
    if (selected.length >= 11) {
  toast("You can select maximum 11 players" )
      return;
    }

    if (coin < biddingPrice) {
      toast("Not enough coin!")
      // alert("Not enough coin!");
      return;
    }

    if (selected.find((p) => p.playerId === player.playerId)) {
     toast("Player already selected!");
      return;
    }

    setCoin((prev) => prev - biddingPrice);
    setSelected((prev) => [...prev, player]);
  };
// if(selected.length >=11){

// alert("You can select maximum 11 players" );
// return ;  
// }

  // const getValue = (id, refund) => {
  //   setSelected(selected.filter(p => p.playerId !== id));
  //   setCoin(coin + refund);
  // };
  return (
<div>
      <div className="max-w-7xl mx-auto font-inter- ">
      <Navbar coin={coin} hedelClick={hedelClick}></Navbar>
      <Banner hedelClick={hedelClick} selected={selected}></Banner>
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {player.map((players) => (
          <DisplayPlayers
            players={players}
            getValue={getValue}
          ></DisplayPlayers>
          
        ))}
      </div>
    </div>

<Footer></Footer>
    
</div>
  );
}

export default App;
