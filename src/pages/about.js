import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Link to="/">HOME</Link>&nbsp;<Link to="/css-modules/">CSS MODULES</Link>
    <Header headerText="Hola Alex" />
    <h3>ay, Your about page is amazing.</h3>
    <p>It makes me touch my face softly.</p>
    <img src="https://source.unsplash.com/jgm0UVzEKZc" alt="face" />
  </div>
)
