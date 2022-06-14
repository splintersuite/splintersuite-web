/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';

import { renderToString } from 'react-dom/server';
import { createStylesServer, ServerStyles } from '@mantine/ssr';

import theme from 'theme';

import Layout from './src/layouts';

export const wrapPageElement = ({ element }) => {
    return (
        <MantineProvider>
            <ThemeProvider theme={theme}>
                <Layout>{element}</Layout>
            </ThemeProvider>
        </MantineProvider>
    );
};

const stylesServer = createStylesServer();

export const replaceRenderer = ({
    bodyComponent,
    replaceBodyHTMLString,
    setHeadComponents,
}) => {
    const html = renderToString(bodyComponent);
    setHeadComponents([<ServerStyles html={html} server={stylesServer} />]);
    replaceBodyHTMLString(html);
};
