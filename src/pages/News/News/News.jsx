import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EtorationEtitor from '../EtorationEtitor/EtorationEtitor';

const News = () => {
    const news = useLoaderData()
    const { category_id, title, details, image_url } = news
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/cate/${category_id}`}><Button variant="danger">All Cate News </Button></Link>
                </Card.Body>
            </Card>
            <EtorationEtitor></EtorationEtitor>
        </div>
    );
};

export default News;