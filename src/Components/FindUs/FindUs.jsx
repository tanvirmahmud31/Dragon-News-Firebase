import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className="space-y-3 mt-5">
            <h1 className="text-xl font-semibold">Find Us On</h1>

            <div>
                <div className="join join-vertical w-full">
                    <button className="btn btn-outline join-item justify-start flex items-center gap-5 py-6">
                        <FaFacebookSquare size={30} color='blue' /> Facebook
                    </button>

                    <button className="btn btn-outline join-item justify-start flex items-center gap-5 py-6">
                        <FaTwitter size={30} color='blue' /> Twitter
                    </button>

                    <button className="btn btn-outline join-item justify-start flex items-center gap-5 py-6">
                       <FaInstagram size={30} /> Instagram
                    </button>
                </div>
            </div>
        </div>


    );
};

export default FindUs;