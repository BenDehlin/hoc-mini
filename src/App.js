import React from "react"
import "./App.css"
import SuperSecret from "./components/SuperSecret"
import OnOffButton from './components/OnOffButtonHooks'
import AccordianMenu from './components/AccordianMenuHooks'

function App() {
  return (
    <div className="App">
      <SuperSecret isAuthenticated={true} />
      <OnOffButton />
      <AccordianMenu title="hello">
        <p>props.children for Accordian Menu</p>
      </AccordianMenu>
    </div>
  )
}

export default App
