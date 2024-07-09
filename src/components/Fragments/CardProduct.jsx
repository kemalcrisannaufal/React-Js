import Button from "../Elements/Button";
import PropTypes from 'prop-types';

const CardProduct = (props) => {
    const {children} = props;
    return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-800 rounded-lg shadow flex flex-col justify-between mx-2">
        {children}    
    </div>
    );
}

const Header = (props) => {
    const {image} = props;
    return (
        <a href="">
          <img
            src={image}
            alt="product"
            className="p-8 rounded-t-lg"
          />
        </a>
    );
}

Header.propTypes = {
    image: PropTypes.string
}

const Body = (props) => {
    const {children, name} = props;
    return (
        <div className="px-5 pb-5 h-full">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {name}
          </h5>
          <p className="text-m text-white">
            {children}
          </p>
        </div>
    );
}

const Footer = (props) => {
    const { price } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button classname="bg-blue-600">Add to cart</Button>
        </div>
    );
}

Footer.propTypes = {
    price: PropTypes.string
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

CardProduct.propTypes = {
    children: PropTypes.node
}

Body.propTypes = {
    children: PropTypes.string,
    name: PropTypes.string
}

export default CardProduct;