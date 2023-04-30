import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import { AuthContext } from '../../../Provider/AurtProvider';

const Cate = () => {
    const { id } = useParams();
    const cateNews = useLoaderData();

    const { user } = useContext(AuthContext);

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
            <>{user}</>
        </div>
    );
};

export default Cate;