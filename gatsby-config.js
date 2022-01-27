module.exports = {
    siteMetadata: {
        title: `NTUEE LIGHTDANCE`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: "nxtQ1jVoLrYFPaSuFlvhkigI2RW5E7GgsTevwQzYOsU",
                spaceId: "ylwybf063k0n",
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
    ],
};
