module.exports = {
  siteMetadata: {
    title: `Ubaid Siddiqui | Developer`,
    description: `Ubaid Siddiqui is a frontend web and android developer based in India, who specializes in developing best performance websites and applications.`,
    author: `Ubaid`,
    siteUrl: `https://ubaid.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ubaid Siddiqui`,
        short_name: `ubaid-siddiqui`,
        start_url: `/`,
        background_color: `#091c27`,
        theme_color: `#091c27`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resovle: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-147969670-1`,
      },
    },
  ],
}
