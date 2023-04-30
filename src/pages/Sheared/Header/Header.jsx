import React from 'react';
import moment from 'moment';
import { Container, Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {

    return (
        <Container>
            <div className="text-center">
                <h1 className='pt-4'>The News Times</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-bold">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light mb-3 rounded p-2'>
                <Button className='me-2' variant="danger">Danger</Button>
                <Marquee speed={100} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container >
    );
};

export default Header;