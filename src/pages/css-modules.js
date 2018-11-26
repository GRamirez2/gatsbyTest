import React from "react"
import Container from "../components/container"
import styles from "./css-modules.module.css"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)


export default () => (
  <Container>

    <h1>CSS Modules</h1>
    <p>CSS Modules are es nice</p>

    <User
      username="Jane Doe"
      avatar="https://source.unsplash.com/-djRG1vB1pw/150x150"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <User
      username="Mija Linda"
      avatar="https://source.unsplash.com/42e14e_DSWE/150x150"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)