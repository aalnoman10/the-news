import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftBar = () => {

    const [cates, setCates] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cate')
            .then(res => res.json())
            .then(data => setCates(data))
            .catch(e => {
                console.error(e);
            })
    }, [])

    return (
        <div>
            <h3 className="text0-bold">All Category</h3>
            <div>
                {
                    cates.map(cate => {
                        return <p key={cate.id}>
                            <Link to={`cate/${cate.id}`}
                                className='text-secondary text-decoration-none d-block'
                            >{cate.name}</Link>
                        </p>
                    })
                }
            </div>
        </div>
    );
};

export default LeftBar;