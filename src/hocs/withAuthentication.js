import React from "react"

const withAuthentication = WrappedComponent => {
  return props => {
    return props.isAuthenticated ? <WrappedComponent {...props} /> : null
  }
}

export default withAuthentication
