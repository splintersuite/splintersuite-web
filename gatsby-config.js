const path = require('path');

module.exports = {
    siteMetadata: {
        title: `splintersuite-web-gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'asdasdasdadasdasda',
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-mantine',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        `gatsby-plugin-sass`,
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                assets: path.join(__dirname, 'src/assets'),
                content: path.join(__dirname, 'content'),
                utils: path.join(__dirname, 'src/utils'),
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
