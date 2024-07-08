import Label from './Label';
import Input from './Input';
import PropTypes from 'prop-types';

const InputForm = (props) => {
    const { type, placeholder, label, name, id } = props
    return (
        <div className='mb-6'>
            <Label
            htmlFor={name}
            >
                {label}
            </Label>
            <Input 
            placeholder={placeholder} 
            type={type} 
            name={name} 
            id={id}/>
        </div>
    );
}

InputForm.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
}

export default InputForm;