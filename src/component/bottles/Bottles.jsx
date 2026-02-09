import React, { use, useState } from "react";
import Bottle from "../bottle/Bottle";

const Bottles = ({ bottlesPromes }) => {
  const bottles = use(bottlesPromes);
  const [card, setCard] = useState([]);

  const handelAddToCard = (bottle) => {
    console.log("Add To My Single Card", bottle);
  };

  return (
    <div>
      <h1 className=" text-2xl text-center mb-10">
        Bottles : {bottles.length}
      </h1>
      <div className="grid grid-cols-1 ml-10 mr-10 sm:grid-cols-2 lg:grid-cols-3 gap-20">

        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handelAddToCard={handelAddToCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
