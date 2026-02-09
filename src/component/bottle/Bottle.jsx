import React from 'react';

const Bottle = ({bottle , handelAddToCard}) => {
    
    

    return (
        <div className=' border rounded-2xl '>
            <img className=' rounded-2xl' src={bottle.img} alt="" />
            <h3 className=' text-center mt-4 text-xl font-bold '>{bottle.name}</h3>
            <p className=' ml-14 mt-3'>${bottle.price}</p>
            <p className=' ml-14 mt-3'>{bottle.stock} remaining</p>
            <button 
            onClick={() => handelAddToCard(bottle)}
            className="px-4 py-2 bg-gray-300 text-gray rounded ml-14 mt-3 mb-2 cursor-pointer font-bold hover:bg-gray-500">Click me</button>
  


        </div>
    );
};

export default Bottle;