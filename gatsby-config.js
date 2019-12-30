module.exports = {
  siteMetadata: {
    title: `Conspac Enterprises`,
    description: `We specialize in krill oil products and extracts.`,
    author: `Glenn Sheppard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Conspace Enterprises`,
        short_name: `conspac`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/conspac-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-69974613-1",
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
