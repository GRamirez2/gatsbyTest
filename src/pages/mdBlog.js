import React from "react"
import { graphql } from "gatsby"
import { css } from "react-emotion"
import Container from "../components/container"

export default ({ data }) => (
  console.log('data', data),
  <Container>
    <h1
      className={css`
        display: inline-block;
        border-bottom: 1px solid;
      `}
    >
      Twerk Blogs
    </h1>
    <h4>
      { data.allMarkdownRemark.totalCount } Posts
    </h4>
    { data.allMarkdownRemark.edges.map(({node}) =>(
    <div key={node.id}>
      <h3 className={css`margin-bottom: 10px`}>
        {node.frontmatter.title}{" "} - {node.frontmatter.date}, <sub className={css`font-size: 14px;`}>Read Time {node.timeToRead} Min.</sub>
      </h3>
      <p>
        <a href={node.fields.slug}>
        {node.excerpt}
        </a>
      </p>
    </div>))}
  </Container>
)

export const query = graphql `
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`
