import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Link to="/about/">ABOUT</Link>&nbsp;<Link to="/css-modules/">CSS MODULES</Link>
    <Header headerText="Hello Alex!" />
    <p>I see you mijito.</p>
    <img src="https://source.unsplash.com/sMx9Ob30sCM" alt="butt" />
  </div>
)
