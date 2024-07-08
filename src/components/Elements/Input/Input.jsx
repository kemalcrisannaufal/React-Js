import PropTypes from 'prop-types';

const Input = (props) => {
    const {type, placeholder, name} = props;
    return (
        <input 
          type={type}  
          className="text-sm border rounded-md w-full p-2 text-slate-700 placeholder:opacity-50"
          name={name}
          id={name}
          placeholder={placeholder}/>
    );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
}

export default Input;