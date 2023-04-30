import React, { useContext, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import { AuthContext } from '../../../Provider/AurtProvider';

const RightBar = () => {

    const { loginWithGoogle } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((res) => {
                console.log(res.user);
            })
            .catch((e) => {
                console.error(e.message);
            })
    }

    return (
        <div>
            <h3 className="text-bold">Login With</h3>
            <Button onClick={handleGoogleLogin} className='my-2 w-100' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button className='my-2 w-100' variant="outline-primary"><FaGithub /> Login With GitHub</Button>
            <div className='py-2'>
                <h3 className="text-bold">Find us</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Facebook</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className="py-2">
                <h1 className="text-center p-5 bg-info rounded my-3">img</h1>
            </div>
        </div>
    );
};

export default RightBar;