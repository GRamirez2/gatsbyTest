import React from "react"
import containerStyles from "./container.module.css"
import { css } from "react-emotion"
import { Link } from "gatsby"

const ListLink = props => (
  <li 
  className={ css `display: inline-block; margin-right: 1rem;`}>
    <Link to={ props.to }> { props.children }</Link>
  </li>
)

export default ({ children }) => (
  <div className={containerStyles.container}>
    <header className={ css `margin-bottom: 1.5rem;`}>
      <Link
        className={ css `text-decoration: none;`}
        // style={{ textDecoration: `none`, backgroundImage: `none` }}
        to="/">
        <h3 className={ css `display: inline`}>
          GATSBY SITE
        </h3>
      </Link>
      <ul className={ css `list-style: none; float:right`}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/css-modules/">Css-modules</ListLink>
        <ListLink to="/mdBlog/">mdBlog</ListLink>
        <ListLink to="/my-files/">MyFiles</ListLink>
      </ul>
    </header>
    {children}
  </div>
)