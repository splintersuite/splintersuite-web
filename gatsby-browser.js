/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';

import theme from 'theme';

import Layout from 'src/layouts';

export const wrapPageElement = ({ element }) => {
    return (
        <MantineProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Layout>{element}</Layout>
            </ThemeProvider>
        </MantineProvider>
    );
};
