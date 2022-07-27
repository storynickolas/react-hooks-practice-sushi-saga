import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [next, setNext] = useState(4)
  // const [start, setStart] = useState(0)
  const [dSushi, setDSushi] = useState(sushi)
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setSushi(data)
        setDSushi(() => data.slice(0,4))
      });
  }, []);

  function handleMore() {
    setNext(next+4)
    setDSushi(() => sushi.slice(next, next+4))
  }

  function eatSushi(piece) {
    setMoney(money-piece.price)
    let stack = [...plates]
    stack.push(1)
    setPlates(stack)
  }

  return (
    <div className="app">
      <SushiContainer 
        sushi={dSushi} 
        handleMore={handleMore} 
        eatSushi={eatSushi} 
        money={money}
        />
      <Table money={money} plates={plates}/>
    </div>
  );
}

export default App;
