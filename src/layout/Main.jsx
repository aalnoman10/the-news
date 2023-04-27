import React from 'react';
import Header from '../pages/Sheared/Header/Header';
import Footer from '../pages/Sheared/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import LeftBar from '../pages/Sheared/LeftBar/LeftBar';
import RightBar from '../pages/Sheared/RightBar/RightBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm={3}>
                        <LeftBar></LeftBar>
                    </Col>
                    <Col sm={6}>
                        Main
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

export default Main;