import React, { Component } from "react"

const withToggle = WrappedComponent => {
  return class WithToggle extends Component {
    constructor(props) {
      super(props)
      this.state = {
        toggle: false
      }
    }

    handleChange = e => {
      const { toggle } = this.state
      this.setState({ toggle: !toggle })
    }
    render() {
      const toggle = {
        value: this.state.toggle,
        handleChange: this.handleChange
      }
      return (
        <WrappedComponent toggle={toggle} {...this.props} />
      )
    }
  }
}

export default withToggle