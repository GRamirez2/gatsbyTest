module.exports = {
  siteMetadata: {
    title: `Everything about Pandas`,
    image: `https://source.unsplash.com/NsNRu6dfRds/650x650`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options:{
        pathToConfigModule: `src/utils/typography.js`
      },
    },
  ],
}