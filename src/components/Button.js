import PropTypes  from "react"

const Button = ({ color, text }) => {
  return (
    <button style={{ backgroudColor: color}}
    className='btn'>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button