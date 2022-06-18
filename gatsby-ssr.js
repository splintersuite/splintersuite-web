/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

import { renderToString } from 'react-dom/server';
import { createStylesServer, ServerStyles } from '@mantine/ssr';
import { renderStylesToString } from '@emotion/server';

import { ThemeProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';

import theme from 'theme';

import Layout from 'src/layouts';

const stylesServer = createStylesServer();

export const wrapPageElement = ({ element }) => {
    return (
        <MantineProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Layout>{element}</Layout>
            </ThemeProvider>
        </MantineProvider>
    );
};

export const replaceRenderer = ({
    bodyComponent,
    replaceBodyHTMLString,
    setHeadComponents,
}) => {
    const html = renderStylesToString(renderToString(bodyComponent));
    setHeadComponents([<ServerStyles html={html} server={stylesServer} />]);
    replaceBodyHTMLString(html);
};
