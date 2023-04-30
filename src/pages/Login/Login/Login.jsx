// import React, { useContext } from 'react';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    // const { danger, success } = useContext()

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='email' label="Check me out" />
                </Form.Group> */}
                <Button className='w-100' variant="secondary" type="submit">Login</Button>

                <Form.Text className="text-success">
                    Don't have an account<Link to='/resister'>Resister</Link>
                </Form.Text>
                <Form.Text className="text-danger">
                    {/* {danger} */}
                </Form.Text>
                <Form.Text className="text-success">
                    {/* {success} */}
                </Form.Text>

            </Form>
        </Container>
    );
};

export default Login;