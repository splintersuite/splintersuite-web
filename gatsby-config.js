const path = require('path');

module.exports = {
    siteMetadata: {
        title: `splintersuite-web-gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        // {
        //     resolve: 'gatsby-plugin-web-font-loader',
        //     options: {
        //         google: {
        //             families: ['Source Sans Pro'],
        //         },
        //     },
        // },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-KZSKPGZ88P", // Google Analytics / GA
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-mantine',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-sass`,
            options: {},
        },
        'gatsby-plugin-mdx',
        `gatsby-plugin-styled-components`,
        'gatsby-plugin-netlify',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `SplinterSuite`,
                short_name: `SplinterSuite`,
                start_url: `/`,
                display: `standalone`,
                icon: `favicon.png`,
            },
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                assets: path.join(__dirname, 'src/assets'),
                content: path.join(__dirname, 'content'),
                utils: path.join(__dirname, 'src/utils'),
                sections: path.join(__dirname, 'src/sections'),
                src: path.join(__dirname, 'src'),
                pages: path.join(__dirname, 'src/pages'),
                components: path.join(__dirname, 'src/components'),
                layouts: path.join(__dirname, 'src/layouts'),
                styles: path.join(__dirname, 'src/styles'),
                static: path.join(__dirname, 'static'),
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
};
