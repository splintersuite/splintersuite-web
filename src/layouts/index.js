/**
 *
 * Layout
 *
 *
 */

import React from 'react';

import Navbar from 'components/Navbar';

import '../styles/screen.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;
