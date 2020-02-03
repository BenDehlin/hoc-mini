import React from "react"
import withToggle from "../hocs/withToggle"

const OnOffButton = props => (
  <button onClick={props.toggle.handleChange}>
    <h1>{props.toggle.value ? "On" : "Off"} </h1>
  </button>
)

export default withToggle(OnOffButton)