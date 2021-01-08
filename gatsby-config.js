/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/pages`,
  siteMetadata: {
    title: "@saraprohan",
    description: "My personal website",
    author: "Rohan Sarap",
    social: {
      instagram: "https://instagram.com/saraprohan",
      twitter: "https://twitter.com/saraprohan",
      github: "https://github.com/saraprohan",
    },
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `@saraprohan`,
        short_name: `@saraprohan`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
