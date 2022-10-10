
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title}) => {
  return (
    <header className="header">
      
        <h1>{title}</h1>
        <Button color='green' text='press'/>
        

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