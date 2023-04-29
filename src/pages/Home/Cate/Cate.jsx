import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Cate = () => {
    const { id } = useParams();
    const cateNews = useLoaderData();

    return (
        <div>
            <h1 className='text-center'>{id ? <>News Size : {cateNews.length}</> : <>Home Page</>}</h1>
            {
                cateNews.map(cateNew =>
                    <NewsCard
                        key={cateNew._id}
                        cateNew={cateNew}
                    ></NewsCard>
                )
            }
        </div>
    );
};

export default Cate;