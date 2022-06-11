/**
 *
 * Layout
 *
 *
 */

import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import Navbar from './Navbar';

import theme from '../theme';
import '../styles/screen.scss';

const Layout = ({ children }) => {
    return (
        <MantineProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MantineProvider>
    );
};

export default Layout;
