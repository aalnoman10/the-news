import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const EtorationEtitor = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 my-4">
            <Col>
                <Card className='h-100'>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <div className='text-center p-5 bg-secondary'>
                        <h1>img</h1>
                    </div>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card className='h-100'>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <div className='text-center p-5 bg-secondary'>
                        <h1>img</h1>
                    </div>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card className='h-100'>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <div className='text-center p-5 bg-secondary'>
                        <h1>img</h1>
                    </div>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default EtorationEtitor;