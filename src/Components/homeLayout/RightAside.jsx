import React from 'react';
import SocialLink from '../SocialLink/SocialLink';
import FindUs from '../FindUs/FindUs';
import Qzone from '../Qzone/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-3'>
           <SocialLink></SocialLink>
           <FindUs></FindUs>
           <Qzone></Qzone>
        </div>
    );
};

export default RightAside;