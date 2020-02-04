import React from "react"
import withToggle from "../hocs/withToggleHooks"

let styles = {
  menuTitle: {
    border: "1px solid black",
    padding: 20
  },
  menuBody: {
    border: "1px solid black",
    borderTop: "none",
    backgroundColor: "#F0F0F0",
    padding: 20
  }
}
const AccordianMenu = ({ toggle, handleToggle, title, children }) => (
  <div>
    <div style={styles.menuTitle} onClick={()=> handleToggle()}>
      {title}
    </div>
    {toggle && <div style={styles.menuBody}>{children}</div>}
  </div>
)


export default withToggle(AccordianMenu)