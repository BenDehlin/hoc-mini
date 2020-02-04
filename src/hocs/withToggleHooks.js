import React, {useState} from 'react'

const withToggle = WrappedComponent => {
  return function WithToggle(props){
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => setToggle(!toggle)
    return (
      <WrappedComponent toggle={toggle} handleToggle={handleToggle} {...props} />
    )
  }
}

export default withToggle