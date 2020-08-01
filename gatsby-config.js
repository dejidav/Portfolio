/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio",
      options: {
        contentPath: `${__dirname}/content` // the path to your markdown files
      }
    }
  ]
}
