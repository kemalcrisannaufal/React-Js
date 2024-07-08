import PropTypes from 'prop-types';

const Button = (props) => {
  const { children='Button', classname } = props;
  return (
    <button className={`h-10 px-5 font-semibold rounded-md ${classname} text-white`} type="submit">
      {children}
    </button>
  )
}

Button.propTypes = {
  classname: PropTypes.string.isRequired,
  children: PropTypes.string
}

export default Button