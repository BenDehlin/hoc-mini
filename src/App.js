import React from "react"
import "./App.css"
import SuperSecret from "./components/SuperSecret"
import OnOffButton from './components/OnOffButton'
import AccordianMenu from './components/AccordianMenu'

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
