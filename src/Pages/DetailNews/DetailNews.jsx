import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../../Components/homeLayout/RightAside';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import { useState } from 'react';
import NewsDetailsCard from '../../Components/NewsDetailsCard/NewsDetailsCard';

const DetailNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [news,setNews]=useState({});

    //console.log(data,id,news)

    
    useEffect(()=>{
        const newsDetails= data.find((singleNews) => singleNews.id==id)
        setNews(newsDetails);
    },[id,data])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 space-y-3 mt-4'>
                <section className='col-span-9'>
                    <h1 className='text-2xl font-bold'>Dragon News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default DetailNews;