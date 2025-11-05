import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard/NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData();


    const [newsCategory, setNewsCategory] = useState([]);

    useEffect(() => {
        if (id == "0") {
            setNewsCategory(data)
            return;
        }
        else if (id == "1") {
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
            setNewsCategory(filteredNews);
        }
        else {
            const filteredNews = data.filter(news => news.category_id == id)
            //console.log(filteredNews)
            setNewsCategory(filteredNews)
        }

    }, [data, id])
    return (
        <div>
            <h1 className='font-bold text-2xl'>Total <span>({newsCategory.length}) news found</span></h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    newsCategory.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;