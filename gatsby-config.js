require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: `NTUEE LIGHTDANCE`,
        siteUrl: `https://www.yourdomain.tld`,
        description: `This ia a website for NTUEE Light Dance with introductions and all performance videos.`,
        author: `NTUEE Light Dance`,
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `NTUEE LIGHTDANCE`,
                short_name: `NTUEE LIGHTDANCE`,
                start_url: `/`,
                icon: `src/images/icon.png`,
            },
        },
    ],
};
