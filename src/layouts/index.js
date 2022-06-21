/**
 *
 * Layout
 *
 *
 */

import React from 'react';

import Navbar from 'components/global/Navbar';
import Footer from 'components/global/Footer';
import SEO from 'components/global/SEO';

import 'styles/screen.scss';

const Layout = ({ children }) => {
    return (
        <>
            <SEO />
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
