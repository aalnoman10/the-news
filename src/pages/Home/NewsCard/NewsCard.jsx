import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ cateNew }) => {
    const { _id, image_url, title, details, author, rating, total_view } = cateNew

    return (
        <div>
            <Card className="mb-4">
                <Card.Header>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                <Image style={{ height: '40px', width: '40px' }} src={author.img} className='img-fluid' roundedCircle />
                            </div>
                            <div>
                                <h6 className='m-0'>{author.name}</h6>
                                <p className="text-secondary m-0">
                                    <small>{moment(author.published_date).format('YYYY-MM-D')}</small>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex g-3">
                            <FaRegBookmark className='me-2' />
                            <FaShareAlt />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>{details.length < 250 ? details : <>{details.slice(0, 250)} ... <Link to={`/news/${_id}`}>Read More</Link></>}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted bg-white">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center me-auto">
                            <p className='mb-0 me-2 text-warning'>
                                <Rating
                                    readonly
                                    placeholderRating={rating.number}
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar />}
                                    fullSymbol={<FaStar />}
                                />
                            </p>
                            <p className='mb-0'>{rating.number}</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className='mb-0 me-2'><FaEye /></p>
                            <p className='mb-0'>{total_view}</p>
                        </div>
                    </div>
                </Card.Footer>
            </Card >
        </div >
    );
};

export default NewsCard;