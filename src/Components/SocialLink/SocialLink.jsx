import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLink = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl'>Login With</h1>
            <div className=' space-y-3 mt-3'>
                <button className='btn w-full btn-outline btn-secondary'><FcGoogle size={24} />  Login With Google</button>
                <button className='btn w-full btn-outline btn-primary'><FaGithub size={24} />  Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLink;