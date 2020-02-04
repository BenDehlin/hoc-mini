import React from 'react'
import withToggle from '../hocs/withToggleHooks'

const OnOffButton = ({toggle, handleToggle}) => (
  <button onClick={() => handleToggle()}>
    <h1>{toggle ? "On" : "Off"} </h1>
  </button>
)

export default withToggle(OnOffButton)