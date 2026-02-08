import React from 'react';

const Bottle = ({bottle}) => {
    console.log(bottle);
    

    return (
        <div className=' border rounded-2xl'>
            <img className=' rounded-2xl' src={bottle.img} alt="" />
            <h3 className=' text-center'>{bottle.name}</h3>

        </div>
    );
};

export default Bottle;