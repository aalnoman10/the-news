import React from 'react';
import Header from '../pages/Sheared/Header/Header';
import Footer from '../pages/Sheared/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import RightBar from '../pages/Sheared/RightBar/RightBar';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col sm={3}>
                        <RightBar></RightBar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;