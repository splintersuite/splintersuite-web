/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function SEO() {
    return (
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=swap"
                rel="stylesheet"
            ></link>
            <title>SplinterSuite | Rent your cards with ease</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="google-site-verification" content="" />
            <meta
                name="description"
                content="SplinterSuite is a Splinterlands bot that automatically and intelligently lists your cards for rental

"
            />

            <meta name="twitter:card" content="summary" />
            <meta
                name="twitter:title"
                content="SplinterSuite | Rent your cards with ease"
            />
            <meta
                name="twitter:description"
                content="SplinterSuite is a Splinterlands bot that automatically and intelligently lists your cards for rental

"
            />
            <meta
                name="twitter:image"
                content="https://splintersuite.com/images/og-image.png"
            />
            <meta
                property="og:title"
                content="SplinterSuite | Rent your cards with ease"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://splintersuite.com" />
            <meta
                property="og:image"
                content="https://splintersuite.com/images/og-image.png"
            />
            <meta
                property="og:description"
                content="SplinterSuite is a Splinterlands bot that automatically and intelligently lists your cards for rental

"
            />
            <meta property="og:site_name" content="SplinterSuite"></meta>
        </Helmet>
    );
}

export default SEO;
