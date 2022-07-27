import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, handleMore, eatSushi, money }) {
  return (
    <div className="belt">
      {sushi.map((item) => <Sushi key={item.id} sushi={item} eatSushi={eatSushi} money={money}></Sushi>)}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
