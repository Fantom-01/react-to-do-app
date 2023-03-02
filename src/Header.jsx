import React from 'react'

const Header = ({ title }) => {
  return (
    <div>{title}</div>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header