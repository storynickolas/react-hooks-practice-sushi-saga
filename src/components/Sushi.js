import React, { useState } from "react";

function Sushi({ sushi, eatSushi, money }) {
  const [eaten, setEaten] = useState(false)

  function handleClick() {
    setEaten(!eaten)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => {
        if(sushi.price < money){
          eatSushi(sushi)
          handleClick()
        }
      }}>
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
