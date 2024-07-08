import PropTypes from 'prop-types';

const Label = (props) => {
    const { children, htmlFor } = props;
    return (
        <label 
          htmlFor={htmlFor}
          className="block text-slate-700 text-sm font-medium mb-2"
        >
            {children}
        </label>
    );
}

Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string
}

export default Label;