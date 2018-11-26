import React from "react"
import { graphql } from "gatsby"
import { css } from "react-emotion"
import Container from "../components/container"
import Header from "../components/header"

export default ({ data }) => (
  <Container>

    <Header headerText={ data.site.siteMetadata.title } />
    <img src={data.site.siteMetadata.image} alt="panda" />

  </Container>
)

export const query = graphql `
  query {
    site {
      siteMetadata {
        title,
        image
      }
    }
  }
`

