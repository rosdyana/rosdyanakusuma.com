module.exports = {
    siteMetadata: {
        title: `Rosdyana Kusuma`,
        siteUrl: `https://rosdyanakusuma.com`,
    },
    plugins: [
        "gatsby-plugin-material-ui",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-89261026-3",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
