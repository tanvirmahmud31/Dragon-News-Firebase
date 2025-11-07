import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    //console.log(news)
    return (
        <div className='space-y-5 mt-4 '>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h2 className='font-bold text-2xl'>{news.title}</h2>
            <p>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn bg-secondary text-white'>  All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;