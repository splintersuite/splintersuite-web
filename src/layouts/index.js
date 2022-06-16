/**
 *
 * Layout
 *
 *
 */

import React from 'react';

import Navbar from 'components/global/Navbar';
import Footer from 'components/global/Footer';

import 'styles/screen.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
