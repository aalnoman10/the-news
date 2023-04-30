import React from 'react';
import NavigationBar from '../pages/Sheared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet />
        </div>
    );
};

export default LoginLayout;