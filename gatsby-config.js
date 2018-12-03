module.exports = {
  siteMetadata: {
    title: `Everything about Panda Life`,
    image: `https://source.unsplash.com/NsNRu6dfRds/650x650`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options:{
        pathToConfigModule: `src/utils/typography.js`
      },
    },
  ],
}