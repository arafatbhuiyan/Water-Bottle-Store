import React, { use } from "react";
import Bottle from "../bottle/bottle";

const Bottles = ({ bottlesPromes }) => {
  const bottles = use(bottlesPromes);
  // console.log(bottles);

  return (
    <div>
        <h1 className=" text-2xl text-center mb-10">Bottles : {bottles.length}</h1>
      <div className=" grid grid-cols-3 gap-20">
        
        {bottles.map((bottle) => (
          <Bottle
          key={bottle.id} 
          bottle={bottle}>

          </Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
