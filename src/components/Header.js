import React from 'react'
import PropTypes from 'prop-types'
const Header = ({ title}) => {
  return (
    <header>
        <h1>{title}</h1>
        <button type="">Add</button>

    </header>
  )
}

Header.defaultProps = {
  title: 'Shooting Stars Garden',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header