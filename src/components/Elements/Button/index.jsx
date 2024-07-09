import PropTypes from "prop-types";

const Button = (props) => {
  const { children = "Button", classname, onClick = () => {}, tipe } = props;
  return (
    <button
      className={`h-10 px-5 font-semibold rounded-md ${classname} text-white`}
      type={tipe}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  classname: PropTypes.string.isRequired,
  children: PropTypes.string,
  onClick: PropTypes.func,
  tipe: PropTypes.string,
};

export default Button;
