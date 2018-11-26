import React from "react"
import { css } from "react-emotion"

export default props => (
  <div className={ css `text-align: center;`}>
    <div className={ css `color: darkgrey; display: inline-block;`}>
      <h2>{props.headerText}</h2>
    </div>
  </div>
)