import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className=' flex gap-3 items-center bg-base-200 p-3 rounded-2xl'>
            <p className='btn btn-secondary px-4 py-3'> Latest</p>
           <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
            
           <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, praesentium!</p>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, praesentium!</p>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, praesentium!</p>
           </Marquee>
        </div>
    );
};

export default LatestNews;