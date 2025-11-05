import React from 'react';
import swimming from '../../assets/swimming.png';
import clas from '../../assets/class.png';
import play from '../../assets/playground.png';
import bg from '../../assets/bg.png'
const Qzone = () => {
    return (
        <div>
            <div className='bg-base-200 space-y-5'>
            <h1 className='text-xl font-semibold mt-5 p-3'>Q-Zone</h1>
            <img src={swimming} alt="" />
            <img src={clas} alt="" />
            <img src={play} alt="" />
            
        </div>
        <div className='mt-5'>
            <img  src={bg} alt="" />
        </div>
        </div>
    );
};

export default Qzone;